import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import FilmFilter from './FilmFilter';
import FilmsList from './FilmsList';
import filterFilms from '../../helpers/films.filters';

const Catalog = ({ films }) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="filters-button" id="filters-button">
          <p>Filters<img className="filters-button-arrow" src="/images/down-arrow.svg" role="presentation" /></p>
        </div>
        <FilmFilter />
        <FilmsList films={films} />
      </div>
    </div>
  );
}



export default connect(
  (state) => ({ films: filterFilms(state.films.allFilms, state.filterFilms) })
)(Catalog);

