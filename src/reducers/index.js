import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tmp/tracks';
import filterFilms from './films.filter.reducer';
import login from './auth.reducer';
import films from './films.reducer';

export default combineReducers({
  routing: routerReducer,
  tracks,
  filterFilms,
  films,
  login,
});
