import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../redux/modules/authentication';
import SignInPage from './SignInPage';

const SignInPageContainer = ({ login }) => (
  <SignInPage handleLogin={login} />
);

SignInPageContainer.propTypes = {
  login: React.PropTypes.func.isRequired
};

export default connect(null, { login: authActions.login })(SignInPageContainer);
