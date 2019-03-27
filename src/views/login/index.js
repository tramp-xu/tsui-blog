import React from 'react';
import LoginForm from './loginForm';

class Login extends React.Component {
  componentDidMount () {
    localStorage.clear();
  }
  render () {
    return (
      <LoginForm>login</LoginForm>
    );
  }
}

export default Login;