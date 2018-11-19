import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import FilmViewTop from './FilmViewTop';
import FilmDescription from './FilmDescription';
import FilmComments from './FilmComments';

const FilmView = ({ filmId, userId, film, onDetailsLoad, doFilmFavorite, onRatingChanged, onCommentAdded }) => {
  if (!film || filmId !== film.id) {
    onDetailsLoad(filmId, userId);
    return null;
  } else {
    const addComment = (title, text) => onCommentAdded(userId, film.id, film.personal.rating, title, text);
    return (
      <div>
        <Header />
        <div className="wrapper">
          <FilmViewTop
            film={film}
            userId={userId}
            doSwitchFavorite={doFilmFavorite} />
          <FilmDescription
            film={film}
            userId={userId}
            onRatingChanged={onRatingChanged}
          />
          <FilmComments 
            comments={film.comments}
            onCommentAdded={addComment.bind(this)} />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => {
    return {
      film: state.films.filmToDisplay,
      filmId: Number(ownProps.params.id),
      userId: state.login.uid,
    };
  },
  (dispatch) => ({
    onDetailsLoad: (filmdId, userId) => {
      dispatch({
        type: 'GET_FILM_DETAILS', payload: {
          filmId: filmdId,
          userId: userId,
        }
      })
    },
    doFilmFavorite: (filmdId, userId) => {
      dispatch({
        type: 'FAVORITE_FILM', payload: {
          filmId: filmdId,
          userId: userId,
        }
      })
    },
    onRatingChanged: (userId, filmdId, newRating) => {
      dispatch({
        type: 'UPDATE_FILM_RATING', payload: {
          userId: userId,
          filmId: filmdId,
          newRating: newRating,
        }
      })
    },
    onCommentAdded: (userId, filmId, rating, title, text) => {
      dispatch({
        type: 'ADD_COMMENT', payload: {
          userId: userId,
          filmId: filmId,
          rating: rating,
          title: title,
          text: text,
        }
      })
    },
  })
)(FilmView);
