import { loadFilms } from '../helpers/films.loader';

export default function films(state = loadFilms(), action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
    return action.payload;
  }

  return state;
}
