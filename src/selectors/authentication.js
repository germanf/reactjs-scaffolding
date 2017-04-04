import createSelector from '../utils/create-selector';

const getResponse = (authentication, fromObj) => {
  const response = authentication[`${fromObj}Request`].response;
  return {
    [`${fromObj}Response`]: {
      success: response.status === 'success',
      message: response.message,
      serverErrors: response.errors.length ? response.errors[0] : {}
    }
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
