import { loadUserDetails, approveUser, deleteUser, unfollowFrom, cancelRequestTo } from '../helpers/user.loader';

export default function user(state = {}, action) {
  if (action.type === 'GET_USER_DETAILS') {
    return loadUserDetails(action.payload.userId);
  } else if (action.type === 'APPROVE_USER') {
    approveUser(action.payload.myId, action.payload.userId);
    return {
      ...loadUserDetails(action.payload.myId)
    }
  } else if (action.type === 'DELETE_USER') {
    deleteUser(action.payload.myId, action.payload.userId);
    return {
      ...loadUserDetails(action.payload.myId)
    }
  } else if (action.type === 'UNFOLLOW_FROM') {
    unfollowFrom(action.payload.myId, action.payload.userId);
    return {
      ...loadUserDetails(action.payload.myId)
    }
  } else if (action.type === 'CANCEL_REQUEST_TO') {
    cancelRequestTo(action.payload.myId, action.payload.userId);
    return {
      ...loadUserDetails(action.payload.myId)
    }
  }

  return state;
}
