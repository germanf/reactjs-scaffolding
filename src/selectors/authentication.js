import { groupBy, forEach, map } from 'lodash';
import createSelector from '../utils/create-selector';

const getResponse = (authentication, fromObj) => {
  const response = authentication[`${fromObj}Request`].response;
  const success = response.success;
  const message = response.message;
  const errors = response.errors || [];
  let serverErrors = {};

  if (errors.length) {
    const groupedErrors = groupBy(errors, error => error.field);
    serverErrors = forEach(groupedErrors, (value, key) => {
      groupedErrors[key] = map(value, error => error.value).join(', ');
    });
  }

  return {
    [`${fromObj}Response`]: { success, message, serverErrors }
  };
};

const getSignUpResponse = ({ authentication }) => getResponse(authentication, 'signUp');

const getSignInResponse = ({ authentication }) => getResponse(authentication, 'signIn');

const getForgotPasswordResponse = ({ authentication }) => getResponse(authentication, 'forgotPassword');

const getResetPasswordResponse = ({ authentication }) => getResponse(authentication, 'resetPassword');

export default createSelector(
  getSignUpResponse,
  getSignInResponse,
  getForgotPasswordResponse,
  getResetPasswordResponse
);
