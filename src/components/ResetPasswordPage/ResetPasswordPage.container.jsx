import React, { PropTypes } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import register from '../../utils/redux-register';
import { resetPasswordTypes } from '../../types';
import ResetPasswordPage from './ResetPasswordPage';

const ForgotPasswordPageContainer = ({ history, match, handleResetPassword, resetPassword }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        path={match.path}
        exact
        render={() => (
          <ResetPasswordPage
            handleResetPassword={data => handleResetPassword(data)}
            resetPassword={resetPassword}
          />
        )}
      />
      <Route
        path={`${match.path}/success`}
        exact
        render={() => (
          <p>Thank you. We have sent you an email to reset your password!</p>
        )}
      />
    </Switch>
  </ConnectedRouter>
);

ForgotPasswordPageContainer.propTypes = {
  handleResetPassword: PropTypes.func.isRequired,
  resetPassword: resetPasswordTypes.isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired
};

export default register(
  ['resetPasswordSelector'],
  ['authentication.handleResetPassword'],
  ForgotPasswordPageContainer
);
