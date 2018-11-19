import React from 'react';
import {connect} from 'react-redux';

import Header from '../common/Header';
import ProfileGeneralInfo from './ProfileGeneralInfo';
import ProfileDetailedInfo from './ProfileDetailedInfo';

const Profile = ({userId, myId, user, isYourProfile, onDetailsLoad, onApproveUser, onFollow, onDeleteUser, onUnfollow, onCancelRequest}) => {
  if (!user || userId !== user.id) {
    onDetailsLoad(userId);
    return null;
  } else {
    return (
      <div>
        <Header/>
        <div className="wrapper">
          <ProfileGeneralInfo
            user={user}
            isYourProfile={isYourProfile}
            userFunctions={
              {
                onFollow: () => onFollow(myId, userId),
                onUnfollow: () => onUnfollow(myId, userId),
                onCancelRequest: () => onCancelRequest(myId, userId),
              }
            }
          />
          <ProfileDetailedInfo
            user={user}
            isYourProfile={isYourProfile}
            userFunctions={
              {
                onApproveUser: onApproveUser,
                onDeleteUser: onDeleteUser,
                onUnfollow: onUnfollow,
                onCancelRequest: onCancelRequest,
              }
            }
          />
        </div>
      </div>
    );
  }
};

export default connect(
  (state, ownProps) => {
    return {
      myId: state.login.uid,
      user: state.user,
      userId: ownProps.params.id ? Number(ownProps.params.id) : state.login.uid,
      isYourProfile: !(ownProps.params.id && Number(ownProps.params.id) !== state.login.uid),
    };
  },
  (dispatch) => ({
    onDetailsLoad: (userId) => {
      dispatch({
        type: 'GET_USER_DETAILS', payload: {
          userId: userId,
        }
      })
    },
    onApproveUser: (myId, userId) => {
      dispatch({
        type: 'APPROVE_USER', payload: {
          myId: myId,
          userId: userId,
        }
      })
    },
    onDeleteUser: (myId, userId) => {
      dispatch({
        type: 'DELETE_USER', payload: {
          myId: myId,
          userId: userId,
        }
      })
    },
    onUnfollow: (myId, userId) => {
      dispatch({
        type: 'UNFOLLOW_FROM', payload: {
          myId: myId,
          userId: userId,
        }
      })
    },
    onCancelRequest: (myId, userId) => {
      dispatch({
        type: 'CANCEL_REQUEST_TO', payload: {
          myId: myId,
          userId: userId,
        }
      })
    },
    onFollow: (myId, userId) => {
      dispatch({
        type: 'FOLLOW_USER', payload: {
          myId: myId,
          userId: userId,
        }
      })
    },
  })
)(Profile);
