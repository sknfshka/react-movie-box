import React from 'react';

let SubsInfo = ({ }) => {

  return (
    <div className="profile-table pink">
      <div className="profile-nav">
        <div className="tablinks active" data-name="subscriptions" data-color="pink" id="defaultOpenPink">Subscriptions</div>
        <div className="tablinks" data-name="subscribers" data-color="pink">Subscribers </div>
      </div>
      <div className="profile-content-tab friends-block" id="subscribers">
        <a className="friends-item" href="/profile">
          <img className="friend-photo" src="/images/user-placeholder.png" />
          <h3>Jhon White</h3>
          <p className="friends-button">Delete</p>
        </a>
      </div>
      <div className="profile-content-tab friends-block active" id="subscriptions">
        <a className="friends-item" href="/profile">
          <img className="friend-photo" src="/images/user-placeholder.png" />
          <h3>Jhon White </h3>
          <p className="friends-button">Unfollow</p>
        </a>
      </div>
    </div>
  )
}

export default SubsInfo;
