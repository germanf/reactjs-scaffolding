import React from 'react';

const SignInPage = ({ handleLogin }) => (
  <div>
    <h1>SignIn</h1>
    <a
      href="/login"
      onClick={(evt) => {
        evt.preventDefault();
        handleLogin({ email: 'aruj.damian@gmail.com', password: '1231241421' });
      }}
    >Click Here</a>
  </div>
);

SignInPage.propTypes = {
  handleLogin: React.PropTypes.func.isRequired
};

export default SignInPage;
