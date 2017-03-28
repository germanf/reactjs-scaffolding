import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../redux/modules/authentication';
import SignUpPage from './SignUpPage';

const SignUpPageContainer = ({ signUp }, { router }) => (
  <SignUpPage
    handleSignUp={(data) => {
      signUp(data)
        .then(() => router.history.push('/'));
    }}
  />
);

SignUpPageContainer.contextTypes = {
  router: React.PropTypes.shape()
};

SignUpPageContainer.propTypes = {
  signUp: React.PropTypes.func.isRequired
};


export default connect(null, { signUp: authActions.signUp })(SignUpPageContainer);
