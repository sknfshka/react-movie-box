import React from 'react';

const ProfileGeneralInfo = ({ user, isYourProfile, userFunctions }) => {

  /*

  userFunctions={
              {
                onApproveUser: onApproveUser,
                onDeleteUser: onDeleteUser,
                onUnfollow: onUnfollow,
                onFollow:
                onCancelRequest: onCancelRequest,
              }
            }
   */


  console.log(user);

  let buttonTitle = "Unfollow";
  let buttonOnClick = userFunctions.onUnfollow;

  if (user.hasPermission === undefined) {
    buttonTitle = "Follow";
    buttonOnClick = userFunctions.onFollow;
  } else if (user.hasPermission === false) {
    buttonTitle = "Cancel request";
    buttonOnClick = userFunctions.onCancelRequest;
  }

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

        {
          isYourProfile ?
          null:
          <button className='button' onClick={buttonOnClick}>{buttonTitle}</button>
        }
        
      </div>
    </div>
  )
}

export default ProfileGeneralInfo;
