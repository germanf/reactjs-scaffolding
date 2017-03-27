import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../redux/modules/authentication';
import SignUpPage from './SignUpPage';

const SignUpPageContainer = () => (
  <SignUpPage />
);

/*
SignInPageContainer.propTypes = {
  login: React.PropTypes.func.isRequired
};
*/

export default connect(null, { login: authActions.login })(SignUpPageContainer);
