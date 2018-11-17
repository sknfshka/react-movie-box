import { userExists } from '../helpers/user.loader';

const initialState = { 
  loggedIn : true,
  failedLogIn : false,
};

export default function login(state = initialState, action) {
  if (action.type === 'LOG_IN' ) {
    if (userExists(action.payload.login, action.payload.password)) { 
      return { ...state, loggedIn: true }; 
    } else { 
      console.log("failed");
      return { ...state, failedLogIn: true } 
    }
  } else if (action.type === 'LOG_OUT') {
    return { loggedIn : false, failedLogIn: false };
  }
  return state;
}