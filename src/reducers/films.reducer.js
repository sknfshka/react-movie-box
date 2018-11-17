import { loadFilms, loadFilmDetails } from '../helpers/films.loader';

const initialState = {
  allFilms : loadFilms(),
}

export default function films(state = initialState, action) {
  /** if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
    return action.payload;
  }*/

  if (action.type === 'GET_FILM_DETAILS') {
    return { ...state, filmToDisplay: loadFilmDetails(action.payload) }
  } else if (action.type === 'FETCH_ALL_FILMS') {
    return { allFilms : loadFilms() }
  }

  return state;
}
