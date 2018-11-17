import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import FilmViewTop from './FilmViewTop';
import FilmDescription from './FilmDescription';
import FilmComments from './FilmComments';

const FilmView = ({ filmId, userId, film, onDetailsLoad }) => {
  if (!film) {
    onDetailsLoad(filmId, userId);
    return null;
  } else {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <FilmViewTop title={film.title} backgroundPicture={film.backgroundPicture} isFavorite={film.personal.isFavorite}/>
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
  })
)(FilmView);
