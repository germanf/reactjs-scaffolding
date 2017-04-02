import React, { PropTypes } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import register from '../../utils/redux-register';
import { signUpTypes } from '../../types';
import SignUpPage from './SignUpPage';

const SignUpPageContainer = ({ history, match, handleSignUp, signUp }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        path={match.path}
        exact
        render={() => (
          <SignUpPage
            handleSignUp={data => handleSignUp(data)}
            signUp={signUp}
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
  handleSignUp: PropTypes.func.isRequired,
  signUp: signUpTypes.isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired
};

export default register(
  ['signUpSelector'],
  ['authentication.handleSignUp'],
  SignUpPageContainer
);
