import React from 'react';
import register from '../../utils/redux-register';
import SignInPage from './SignInPage';

const SignInPageContainer = ({ handleLogin }) => (
  <SignInPage handleLogin={handleLogin} />
);

SignInPageContainer.propTypes = {
  handleLogin: React.PropTypes.func.isRequired
};

export default register(
  [],
  ['authentication.handleLogin'],
  SignInPageContainer
);

