import { loadUserDetails } from '../helpers/user.loader';

export default function user(state = {}, action) {
  if (action.type === 'GET_USER_DETAILS') {
    return loadUserDetails(action.payload.userId);
  }

  return state;
}
