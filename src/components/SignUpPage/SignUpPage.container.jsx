import React, { PropTypes } from 'react';
import register from '../../utils/redux-register';
import { signUpTypes } from '../../types';
import SignUpPage from './SignUpPage';

const SignUpPageContainer = ({ handleSignUp, signUp }) => (
  <SignUpPage
    handleSignUp={data => handleSignUp(data)}
    signUp={signUp}
  />
);

SignUpPageContainer.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  signUp: signUpTypes.isRequired
};

export default register(
  ['signUpSelector'],
  ['authentication.handleSignUp'],
  SignUpPageContainer
);
