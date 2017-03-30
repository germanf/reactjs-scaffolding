import React from 'react';
import register from '../../utils/redux-register';
import SignUpPage from './SignUpPage';

const SignUpPageContainer = ({ signUp }, { router }) => (
  <SignUpPage
    handleSignUp={(data) => {
      signUp(data).then(() => router.history.push('/'));
    }}
  />
);

SignUpPageContainer.contextTypes = {
  router: React.PropTypes.shape()
};

SignUpPageContainer.propTypes = {
  signUp: React.PropTypes.func.isRequired
};

export default register(
  [],
  ['authentication.signUp'],
  SignUpPageContainer
);
