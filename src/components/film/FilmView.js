import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';

const FilmView = ({ film }) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        {film.title}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    film: state.films.allFilms.find(f => f.id === Number(ownProps.params.id))
  };
};

export default connect(mapStateToProps)(FilmView);
