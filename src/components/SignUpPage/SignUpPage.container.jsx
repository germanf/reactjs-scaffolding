import React from 'react';
import register from '../../utils/redux-register';
import SignUpPage from './SignUpPage';

const SignUpPageContainer = ({ signUp }) => (
  <SignUpPage
    handleSignUp={data => signUp(data)}
  />
);

SignUpPageContainer.propTypes = {
  signUp: React.PropTypes.func.isRequired
};

export default register(
  [],
  ['authentication.signUp'],
  SignUpPageContainer
);
