import React from 'react';
import register from '../../utils/redux-register';
import SignInPage from './SignInPage';
import { authenticationTypes } from '../../types';

const SignInPageContainer = ({ handleLogin }) => (
  <SignInPage handleLogin={handleLogin} />
);

SignInPageContainer.propTypes = {
  handleLogin: authenticationTypes.handleLogin.isRequired
};

export default register(
  [],
  ['authentication.handleLogin'],
  SignInPageContainer
);

