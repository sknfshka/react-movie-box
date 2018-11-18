import React from 'react';
import { connect } from 'react-redux';

const FilmFilter = ({ onFilterTitle, onFilterCategory, onSortBy, onFilterRating, ratingFrom, onFilterYearFrom, onFilterYearUntil }) => {

  let filterTitleInput,
    categorySelect,
    sortBySelect,
    ratingFromSlider,
    yearFromInput,
    yearUntilInput;

  const filterTitle = () => onFilterTitle(filterTitleInput.value);
  const filterCategory = () => onFilterCategory(categorySelect.value);
  const sortBy = () => onSortBy(sortBySelect.value);
  const filterRating = () => onFilterRating(ratingFromSlider.value);
  const filterYearFrom = () => onFilterYearFrom(yearFromInput.value);
  const filterYearUntil = () => onFilterYearUntil(yearUntilInput.value);

  return (
    <div className="filter-form" id="filter-form">
      <div className="form-item year-label">
        <label className="form-item__label" htmlFor="year-from-filter">Year from</label>
        <input className="form-item__input" id="year-from-filter" type="text" name="year-from"
          ref={(input) => { yearFromInput = input }} onKeyUp={filterYearFrom} />
        <label className="form-item__label" htmlFor="year-until-filter">to</label>
        <input className="form-item__input" id="year-until-filter" type="text" name="year-until"
          ref={(input) => { yearUntilInput = input }} onKeyUp={filterYearUntil} />
      </div>
      <div className="form-item">
        <label className="form-item__label" htmlFor="title-filter">Title</label>
        <input className="form-item__input" id="title-filter" type="text" name="title"
          ref={(input) => { filterTitleInput = input }} onKeyUp={filterTitle} />
      </div>
      <div className="form-item">
        <label className="form-item__label" htmlFor="rating-filter">Rating</label>
        <div className="form-item__range">
          <div className="form-item__range__rating-value" id="rating-value">{ratingFrom}</div>
          <input className="form-item__range__range-slider" id="rating-filter" type="range" name="rating" min="0" max="10"
            defaultValue="0" ref={(slider) => { ratingFromSlider = slider }} onInput={filterRating} />
          <div className="form-item__range__rating-value">10</div>
        </div>
      </div>
      <div className="form-item">
        <label className="form-item__label" htmlFor="category-filter">Category</label>
        <select className="form-item__input"
          id="category-filter" name="category" ref={(select) => { categorySelect = select }} onChange={filterCategory}>
          <option value="all">All</option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="fantasy">Fantasy</option>
          <option value="drama">Drama</option>
          <option value="western">Western</option>
          <option value="musical">Musical</option>
          <option value="romance">Romance</option>
          <option value="biography">Biography</option>
          <option value="history">History</option>
          <option value="music">Music</option>
        </select><i className="form-item__select-arrow"></i></div>
      <div className="form-item">
        <label className="form-item__label" htmlFor="sort-by">Sort By</label>
        <select className="form-item__input"
          id="sort-by" name="sort" ref={(select) => { sortBySelect = select }} onChange={sortBy}>
          <option value="title">Title</option>
          <option value="latest">New</option>
          <option value="best">Best</option>
        </select><i className="form-item__select-arrow"></i></div>
    </div>
  );
}

export default connect(
  (state) => ({
    ratingFrom: state.filterFilms.ratingFrom,
  }),
  dispatch => ({
    onFilterTitle: (title) => { dispatch({ type: 'FILTER_BY_TITLE', payload: title }) },
    onFilterCategory: (category) => { dispatch({ type: 'FILTER_BY_CATEGORY', payload: category }) },
    onSortBy: (param) => dispatch({ type: 'SORT_BY', payload: param }),
    onFilterRating: (ratingFrom) => dispatch({ type: 'FILTER_BY_RATING', payload: ratingFrom }),
    onFilterYearFrom: (yearFrom) => dispatch({ type: 'FILTER_BY_YEAR_FROM', payload: yearFrom }),
    onFilterYearUntil: (yearUntil) => dispatch({ type: 'FILTER_BY_YEAR_UNTIL', payload: yearUntil }),
  })
)(FilmFilter);
