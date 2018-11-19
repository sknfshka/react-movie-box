import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import filterFilms from './films.filter.reducer';
import login from './auth.reducer';
import films from './films.reducer';
import user from './user.reducer';

export default combineReducers({
  routing: routerReducer,
  filterFilms,
  films,
  login,
  user,
});
