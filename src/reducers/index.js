import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tracks';
import playlists from './playlists';
import filterFilms from './filterFilms';
import login from './login';
import films from './films';

export default combineReducers({
  routing: routerReducer,
  tracks,
  playlists,
  filterFilms,
  films,
  login,
});
