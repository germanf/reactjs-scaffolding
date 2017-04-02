import React from 'react';
import register from '../../utils/redux-register';
import SignInPage from './SignInPage';

const SignInPageContainer = ({ login }) => (
  <SignInPage handleLogin={login} />
);

SignInPageContainer.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default register(
  [],
  ['authentication.login'],
  SignInPageContainer
);

