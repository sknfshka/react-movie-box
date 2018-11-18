import React from 'react';

import FilmsInfo from './FilmsInfo';
import SubsInfo from './SubsInfo';

let ProfileDetailedInfo = ({ user }) => {

  return (
    <div className="right-container">
      <FilmsInfo />
      <SubsInfo />
    </div>
  )
}

export default ProfileDetailedInfo;
