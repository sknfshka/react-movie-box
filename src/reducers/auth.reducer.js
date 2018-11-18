import { logIn } from '../helpers/user.loader';

/*const initialState = { 
  loggedIn : false,
  failedLogIn : false,
};*/

const initialState = { 
  loggedIn : true,
  failedLogIn : false,
  uid : 321,
};

export default function login(state = initialState, action) {
  if (action.type === 'LOG_IN' ) {
    const uid = logIn(action.payload.login, action.payload.password);
    if (uid) { 
      return { ...state, loggedIn: true, uid: uid, }; 
    } else { 
      return { ...state, failedLogIn: true } 
    }
  } else if (action.type === 'LOG_OUT') {
    return { loggedIn : false, failedLogIn: false };
  }
  return state;
}
