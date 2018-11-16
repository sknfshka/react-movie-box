const initialState = { loggedIn : false };

export default function login(state = initialState, action) {
  if (action.type === 'LOG_IN') {
    return { loggedIn : true };
  } else if (action.type === 'LOG_OUT') {
    return { loggedIn : false };
  }
  return state;
}
