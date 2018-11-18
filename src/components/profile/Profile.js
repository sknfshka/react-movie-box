import React from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import ProfileGeneralInfo from './ProfileGeneralInfo';
import ProfileDetailedInfofrom from './ProfileDetailedInfo';

const Profile = ({ userId, user, onDetailsLoad }) => {
  if (!user || userId != user.id) {
    onDetailsLoad(userId);
    return null;
  } else {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <ProfileGeneralInfo />
          <ProfileDetailedInfofrom />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => {
    return {
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
  })
)(Profile);
