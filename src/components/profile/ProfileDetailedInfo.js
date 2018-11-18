import React from 'react';

import FilmsInfo from './FilmsInfo';
import SubsInfo from './SubsInfo';

let ProfileDetailedInfo = ({ user, isYourProfile }) => {

  return (
    <div className="right-container">
      <FilmsInfo user={user} />
      <SubsInfo user={user} isYourProfile={isYourProfile} />
    </div>
  )
}

export default ProfileDetailedInfo;
