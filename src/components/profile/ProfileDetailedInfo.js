import React from 'react';

import FilmsInfo from './FilmsInfo';
import SubsInfo from './SubsInfo';

const ProfileDetailedInfo = ({ user, isYourProfile }) => {

  return (
    <div className="right-container">
      <FilmsInfo user={user} isYourProfile={isYourProfile}/>
      <SubsInfo user={user} isYourProfile={isYourProfile} />
    </div>
  )
}

export default ProfileDetailedInfo;
