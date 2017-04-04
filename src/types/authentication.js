import { PropTypes } from 'react';
import formType from './form';

const authFormResponse = PropTypes.shape({
  message: formType.message.isRequired,
  serverErrors: formType.serverErrors.isRequired,
  success: PropTypes.bool.isRequired
});

export default {
  // Requests States
  signInRequest: authFormResponse,
  signUpResponse: authFormResponse,
  forgotPasswordResponse: authFormResponse,
  resetPasswordResponse: authFormResponse,
  // Actions
  handleResetPassword: PropTypes.func,
  handleSignUp: PropTypes.func,
  handleForgotPassword: PropTypes.func,
  handleLogin: PropTypes.func
};
