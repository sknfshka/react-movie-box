import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLogIn = props.onLogIn.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
}

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { login, password } = this.state;
    if (login && password) { this.onLogIn(); }
  }

  handleEmailChange(event) {
    console.log('email was changed', event.target.value);
    this.setState({email: event.target.value});
  }

  render() {
    const { login, password, submitted } = this.state;
    return (
      <div className="wrapper login-wrapper">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-icon">
            <img src="/images/video-camera.svg" role="presentation"/>
          </div>
          <h1 className="login-title">MovieBox</h1>
          <div className={'form-item' + (submitted && !login ? ' has-error' : '')}>
            <label className="form-item__label" htmlFor="login">Username</label>
            <input className="form-item__input" id="login" type="text" name="login" onChange={this.handleChange}/>
          </div>
          <div className={'form-item' + (submitted && !password ? ' has-error' : '')}>
            <label className="form-item__label" htmlFor="password">Password</label>
            <input className="form-item__input" id="password" type="password" name="password" onChange={this.handleChange}/>
          </div>
        <input className="form-item__input form-item__input_button" id="submit" type="submit" name="password" value="LOG IN"></input>
          <a className="forget-login-link">Forgot password?</a>
        </form>
      </div>
    );
  }
  
}
export default connect(
  (state, ownProps) => ({}),
  dispatch => ({
    onLogIn: () => {
      dispatch({ type: 'LOG_IN' });
      hashHistory.push('/');
    },
  })
)(Login);
