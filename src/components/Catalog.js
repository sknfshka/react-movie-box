import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import FilmFilter from './FilmFilter';
import FilmsList from './FilmsList';
import filterFilms from '../helpers/films.filters';

const Catalog = ({ films }) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <FilmFilter />
        <FilmsList films={films} />
      </div>
    </div>
  );
}



export default connect(
  (state) => ({ films: filterFilms(state.films, state.filterFilms) })
)(Catalog);

