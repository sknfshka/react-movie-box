import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';

const FilmView = ({ id, film, onDetailsLoad }) => {
  if (!film) { 
    onDetailsLoad(id);
    return null; 
  } else {
    return (
      <div>
        <Header />
        <div className="wrapper">
          {film.title}
        </div>
      </div>
    );
  } 
}

const mapStateToProps = (state, ownProps) => {
  return {
    film: state.films.filmToDisplay,
    id: Number(ownProps.params.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDetailsLoad: (id) => { dispatch({ type: 'GET_FILM_DETAILS', payload: id }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmView);
