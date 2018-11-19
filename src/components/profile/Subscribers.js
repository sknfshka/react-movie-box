import React from 'react';

import User from '../common/parts/User';

const Subscribers = ({ user, userFunctions }) => {

  let toApprove = [];
  const onApproveRequest = (subId) => {
    userFunctions.onApproveUser(user.id, subId);
  };

  user.subscribers
    .filter(s => !s.approved)
    .forEach((s, id) => {
      toApprove.push(
        <User
          user={s}
          button={
            {
              label: "approve",
              performUserAction: onApproveRequest
            }
          }
          key={id}
        />
      );
    });

  let toRemove = [];
  const onRemove = (subId) => {
    userFunctions.onDeleteUser(user.id, subId);
  };
  user.subscribers
    .filter(s => s.approved)
    .forEach((s, id) => {
      toRemove.push(
        <User
          user={s}
          button={
            {
              label: "remove",
              performUserAction: onRemove
            }
          }
          key={id}
        />
      );
    });

  return (
    <div className="profile-content-tab friends-block active" id="subscribers">
      {toApprove}
      {toRemove}
    </div>
  )
};

export default Subscribers;