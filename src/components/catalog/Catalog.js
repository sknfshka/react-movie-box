import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import FilmFilter from './FilmFilter';
import FilmsList from './FilmsList';
import filterFilms from '../../helpers/films.filters';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      showMobileForm: false,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      ...nextProps
    });
  }

  render = () => {
    const { films, showMobileForm } = this.state;
    const expandMobileFilters = () => this.setState({
      ...this.state,
      showMobileForm: !this.state.showMobileForm
    });
    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className={"filters-button" + (showMobileForm ? " show" : "")} id="filters-button"
               onClick={expandMobileFilters}>
            <p>Filters<img className="filters-button-arrow" src="/images/down-arrow.svg" role="presentation" /></p>
          </div>
          <FilmFilter showMobileForm={showMobileForm}/>
          <FilmsList films={films} />
        </div>
      </div>
    );
  };
}

export default connect(
  (state) => ({ films: filterFilms(state.films.allFilms, state.filterFilms) })
)(Catalog);

