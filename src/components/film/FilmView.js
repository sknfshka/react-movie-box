import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import FilmViewTop from './FilmViewTop';
import FilmDescription from './FilmDescription';
import FilmComments from './FilmComments';

const FilmView = ({ filmId, userId, film, onDetailsLoad, doFilmFavorite }) => {
  if (!film || filmId != film.id) {
    onDetailsLoad(filmId, userId);
    return null;
  } else {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <FilmViewTop
            film={film}
            userId={userId}
            doSwitchFavorite={doFilmFavorite} />
          <FilmDescription film={film} />
          <FilmComments comments={film.comments} />
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
  })
)(FilmView);
