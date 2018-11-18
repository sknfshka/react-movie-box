import React from 'react';
import { Link } from 'react-router';

const User = ({ user, button }) => {

  const onButtonClick = (event) => {
    event.preventDefault();
    button.performUserAction(user.id);
  }

  return (
    <Link className="friends-item" to={`/profile/${user.id}`}>
      <img className="friend-photo" src={user.logo ? user.logo : "/images/user-placeholder.png"} alt={"user-" + user.id + "-logo"} />
      <h3>{user.name}</h3>
      {button ? <p className="friends-button" onClick={onButtonClick}>{button.label}</p> : null}
    </Link>
  );
}

export default User;