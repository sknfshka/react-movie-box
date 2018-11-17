import { loadFilms, loadFilmDetails, getUserInfoToFilm } from '../helpers/films.loader';

const initialState = {
  allFilms: loadFilms(),
}

export default function films(state = initialState, action) {
  if (action.type === 'GET_FILM_DETAILS') {
    return {
      ...state, filmToDisplay: {
        ...loadFilmDetails(action.payload.filmId),
        personal: getUserInfoToFilm(action.payload.filmId, action.payload.userId),
      }
    }
  } else if (action.type === 'FETCH_ALL_FILMS') {
    return { allFilms: loadFilms() }
  }

  return state;
}
