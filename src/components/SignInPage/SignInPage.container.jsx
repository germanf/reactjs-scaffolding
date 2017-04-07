import React from 'react';
import register from '../../utils/redux-register';
import SignInPage from './SignInPage';
import { authenticationTypes } from '../../types';

const SignInPageContainer = ({ handleLogin, signInResponse }) => (
  <SignInPage handleLogin={handleLogin} signInResponse={signInResponse} />
);

SignInPageContainer.propTypes = {
  handleLogin: authenticationTypes.handleLogin.isRequired,
  signInResponse: authenticationTypes.signInResponse.isRequired
};

export default register(
  ['authenticationSelector'],
  ['authentication.handleLogin'],
  SignInPageContainer
);

