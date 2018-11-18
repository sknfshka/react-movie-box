import React from 'react';

let ProfileGeneralInfo = ({ user, isYourProfile }) => {
  return (
    <div className="left-siderbar-dark">
      <div className="profile-info">
        <img className="profile-photo" src={user.logo ? user.logo : "/images/user-placeholder.png"} alt="profile-logo" />
        <h2 className="user-name">{user.name}</h2>
        <a className="user-email">{user.email}</a>
        <p>Registration date: 
          <span>{" " + user.registrationDate.toLocaleString('eng', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </p>
      </div>
    </div>
  )
}

export default ProfileGeneralInfo;
