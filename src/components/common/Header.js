import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <navbar className="nav-sticky">
      <Link to='/'><img className="navbar-login-icon" src="/images/video-camera-white.svg" role="presentation" /></Link>
      <Link to='/' className="navbar-login-title">MovieBox</Link>
      <Link to='/profile'><img className="navbar-user-icon" src="/images/profile.svg" role="presentation" /></Link>
    </navbar>
  );
}

export default Header;
