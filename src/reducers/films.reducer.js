import { loadFilms, loadFilmDetails, getUserInfoToFilm, switchFilmFavorite, updateRating } from '../helpers/films.loader';

const initialState = {
  allFilms: loadFilms(),
  filmToDisplay: {},
}

export default function films(state = initialState, action) {
  if (action.type === 'GET_FILM_DETAILS') {
    return {
      ...state,
      filmToDisplay: {
        ...loadFilmDetails(action.payload.filmId),
        personal: getUserInfoToFilm(action.payload.filmId, action.payload.userId),
      }
    }
  } else if (action.type === 'FETCH_ALL_FILMS') {
    return { allFilms: loadFilms() }
  } else if (action.type === 'FAVORITE_FILM') {
    switchFilmFavorite(action.payload.userId, action.payload.filmId);
    return {
      ...state,
      filmToDisplay: {
        ...loadFilmDetails(action.payload.filmId),
        personal: getUserInfoToFilm(action.payload.filmId, action.payload.userId),
      }
    }
  } else if (action.type === 'UPDATE_FILM_RATING') {
    updateRating(action.payload.userId, action.payload.filmId, action.payload.newRating);
    return {
      ...state,
      filmToDisplay: {
        ...loadFilmDetails(action.payload.filmId),
        personal: getUserInfoToFilm(action.payload.filmId, action.payload.userId),
      }
    }
  }

  return state;
}
