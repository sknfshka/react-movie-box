import React from 'react';

import User from '../common/parts/User';

const Subscriptions = ({ user, isYourProfile }) => {

  let onRequest = [];
  if (isYourProfile) {
    const onCancelRequest = (subId) => {
      console.log("User " + user.id + " cancels sub request from " + subId);
    }

    user.subscriptions
      .filter(s => !s.approved)
      .forEach((s, id) => {
        onRequest.push(
          <User
            user={s}
            button={isYourProfile ?
              {
                label: "cancel request",
                performUserAction: onCancelRequest
              } : null}
            key={id}
          />
        );
      })
  }


  let followed = [];
  const onUnFollow = (subId) => {
    console.log("User " + user.id + " unfollows from " + subId);
  }
  user.subscriptions
    .filter(s => s.approved)
    .forEach((s, id) => {
      followed.push(
        <User
          user={s}
          button={isYourProfile ?
            {
              label: "unfollow",
              performUserAction: onUnFollow
            } : null}
          key={id}
        />
      );
    });

  return (
    <div className="profile-content-tab friends-block active" id="subscriptions">
      {onRequest}
      {followed}
    </div>
  )
}

export default Subscriptions;
