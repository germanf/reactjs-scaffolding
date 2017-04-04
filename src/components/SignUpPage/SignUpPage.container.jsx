import React, { PropTypes } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import register from '../../utils/redux-register';
import { authenticationTypes } from '../../types';
import SignUpPage from './SignUpPage';

const SignUpPageContainer = ({ history, match, handleSignUp, signUpResponse }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        path={match.path}
        exact
        render={() => (
          <SignUpPage
            handleSignUp={data => handleSignUp(data)}
            serverErrors={signUpResponse.serverErrors}
          />
        )}
      />
      <Route
        path={`${match.path}/success`}
        render={() => (
          <p>Thank you. We have sent you an email to confirm your acount!</p>
        )}
      />
    </Switch>
  </ConnectedRouter>
);

SignUpPageContainer.propTypes = {
  handleSignUp: authenticationTypes.handleSignUp.isRequired,
  signUpResponse: authenticationTypes.signUpResponse.isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired
};

export default register(
  ['authenticationSelector'],
  ['authentication.handleSignUp'],
  SignUpPageContainer
);
