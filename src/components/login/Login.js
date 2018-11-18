import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'

//import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      login: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLogIn = props.onLogIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      failedLogIn: false
    });
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      failedLogIn: nextProps.failedLogIn
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { login, password } = this.state;
    if (login && password) { this.onLogIn(login, password); }
  }

  render = () => {
    var { login, password, submitted, failedLogIn } = this.state;
    const styles = (<style>{"body { height:100%; background-color: rgba(255, 255, 255, 0.8); } html { height:100%; background-color: #303030; } "}</style>);
    return (
      <div className="wrapper login-wrapper">
        {styles}
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-icon">
            <img src="/images/video-camera.svg" role="presentation" />
          </div>
          <h1 className="login-title">MovieBox</h1>
          <div className={'form-item' + (submitted && !login ? ' has-error' : '') + (submitted && failedLogIn ? ' has-warning' : '')}>
            <label className="form-item__label" htmlFor="login">Username</label>
            <input className="form-item__input" id="login" type="text" name="login" onChange={this.handleChange} />
          </div>
          <div className={'form-item' + (submitted && !password ? ' has-error' : '') + (submitted && failedLogIn ? ' has-warning' : '')}>
            <label className="form-item__label" htmlFor="password">Password</label>
            <input className="form-item__input" id="password" type="password" name="password" onChange={this.handleChange} />
          </div>
          <input className="form-item__input form-item__input_button" id="submit" type="submit" name="password" value="LOG IN"></input>
          <a className="forget-login-link">Forgot password?</a>
        </form>
      </div>
    );
  }

}
export default connect(
  (state) => ({ failedLogIn: state.login.failedLogIn }),
  dispatch => ({
    onLogIn: (login, password) => {
      dispatch({ type: 'LOG_IN', payload: { login: login, password: password } });
      hashHistory.push('/');
    },
  })
)(Login);
