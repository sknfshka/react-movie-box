import React from 'react';

let ProfileGeneralInfo = ({ }) => {

  return (
    <div className="left-siderbar-dark">
      <div className="profile-info">
        <img className="profile-photo" src="/images/user-placeholder.png" />
        <h2 className="user-name">Jhon Black</h2>
        <a className="user-email">jhonblack@mail.com</a>
        <p>Registration date:<span>10 November 2010</span></p>
      </div>
    </div>
  )
}

export default ProfileGeneralInfo;
