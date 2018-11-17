const initialState = {
  title: '',
  category: 'all',
  yearFrom: 0,
  yearUntil: Infinity,
  ratingFrom: 0,
  sortBy: 'title',
};

export default function filterFilms(state = initialState, action) {
  let newState = { ...state };

  if (action.type === 'FILTER_BY_TITLE') { newState.title = action.payload; }
  if (action.type === 'FILTER_BY_YEAR_FROM') {
    if (!action.payload || action.payload === '') { newState.yearFrom = 0; }
    else { newState.yearFrom = Number(action.payload); }
  }
  if (action.type === 'FILTER_BY_YEAR_UNTIL') {
    if (!action.payload || action.payload === '') { newState.yearUntil = Infinity; }
    else { newState.yearUntil = Number(action.payload); }
  }
  if (action.type === 'FILTER_BY_RATING') { newState.ratingFrom = Number(action.payload); }
  if (action.type === 'FILTER_BY_CATEGORY') { newState.category = action.payload; }
  if (action.type === 'SORT_BY') { newState.sortBy = action.payload; }

  return newState;
}
