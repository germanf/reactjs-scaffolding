import { push } from 'react-router-redux';
import { userActions } from './user';
import { layoutActions } from './layout';
import Api from '../../api';
import { storeToken, clearToken, clearState } from '../../api/auth_token';
import { getResponseObject, getDefaultRequestObject } from '../../utils/request';

const { AuthenticationApiCalls } = Api;

// Initial State
const initialState = {
  signInRequest: getDefaultRequestObject,
  signUpRequest: getDefaultRequestObject,
  forgotPasswordRequest: getDefaultRequestObject,
  resetPasswordRequest: getDefaultRequestObject
};

// Actions
const LOGIN = 'app/authentication/LOGIN';
const SIGNUP = 'app/authentication/SIGNUP';
const FORGOT_PASSWORD = 'app/authentication/FORGOT_PASSORD';
const RESET_PASSWORD = 'app/authentication/RESET_PASSORD';


// Reducer
const AuthenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return { ...state, signInRequest: getResponseObject('PENDING', action.payload) };
    case `${LOGIN}_FULFILLED`:
      return { ...state, signInRequest: getResponseObject('FULFILLED', action.payload) };
    case `${LOGIN}_REJECTED`:
      return { ...state, signInRequest: getResponseObject('REJECTED', action.payload) };

    case `${SIGNUP}_PENDING`:
      return { ...state, signUpRequest: getResponseObject('PENDING', action.payload) };
    case `${SIGNUP}_FULFILLED`:
      return { ...state, signUpRequest: getResponseObject('FULFILLED', action.payload) };
    case `${SIGNUP}_REJECTED`:
      return { ...state, signUpRequest: getResponseObject('REJECTED', action.payload) };

    case `${FORGOT_PASSWORD}_PENDING`:
      return { ...state, forgotPasswordRequest: getResponseObject('PENDING', action.payload) };
    case `${FORGOT_PASSWORD}_FULFILLED`:
      return { ...state, forgotPasswordRequest: getResponseObject('FULFILLED', action.payload) };
    case `${FORGOT_PASSWORD}_REJECTED`:
      return { ...state, forgotPasswordRequest: getResponseObject('REJECTED', action.payload) };

    case `${RESET_PASSWORD}_PENDING`:
      return { ...state, resetPasswordRequest: getResponseObject('PENDING', action.payload) };
    case `${RESET_PASSWORD}_FULFILLED`:
      return { ...state, resetPasswordRequest: getResponseObject('FULFILLED', action.payload) };
    case `${RESET_PASSWORD}_REJECTED`:
      return { ...state, resetPasswordRequest: getResponseObject('REJECTED', action.payload) };

    default: return state;
  }
};

export default AuthenticationReducer;


// **** Action Creators ***** //

/**
 * Login Action
 * @param {Object} containing { email, password }
 */
const login = ({
  email,
  password
}) => (dispatch) => {
  dispatch(layoutActions.showLoading(true));
  dispatch({
    type: LOGIN,
    payload: AuthenticationApiCalls.login({ email, password })
  })
  .then((response) => {
    // remove token from object
    const { token, ...userData } = response.value.data;
    // store token in localStorage
    storeToken(token);
    // set User Data
    dispatch(userActions.handleSetUserData(userData));
    // set user logged
    dispatch(userActions.handleSetUserLogged(true));
    // Done!
    dispatch(layoutActions.showLoading(false));
  })
  .catch((response) => {
    dispatch(layoutActions.showLoading(false));
    return response.errors;
  });
};

/**
 * LogOut Action
 */
const logOut = () => (dispatch) => {
  clearToken();
  clearState();
  dispatch({ type: 'RESET' });
};

/**
 * SignUp Action
 * @param {Object} containing { name, email, password }
 */
const signUp = ({
  name,
  email,
  password
}) => (dispatch) => {
  dispatch(layoutActions.showLoading(true));
  dispatch({
    type: SIGNUP,
    payload: AuthenticationApiCalls.signUp({ name, email, password })
  })
  .then((response) => {
    dispatch(layoutActions.showLoading(false));
    dispatch(push('/signup/success'));
    return response;
  })
  .catch((response) => {
    dispatch(layoutActions.showLoading(false));
    return response.errors;
  });
};

/**
 * Forgot Password Action
 * @param {Object} containing { email }
 */
const forgotPassword = ({
  email
}) => (dispatch) => {
  dispatch(layoutActions.showLoading(true));
  dispatch({
    type: FORGOT_PASSWORD,
    payload: AuthenticationApiCalls.forgotPassword({ email })
  })
  .then((response) => {
    dispatch(layoutActions.showLoading(false));
    dispatch(push('/forgot-password/success'));
    return response;
  })
  .catch((response) => {
    dispatch(layoutActions.showLoading(false));
    return response.errors;
  });
};

/**
 * Reset Password Action
 * @param {Object} containing { token, password }
 */
const resetPassword = ({
  token,
  password
}) => (dispatch) => {
  dispatch(layoutActions.showLoading(true));
  dispatch({
    type: RESET_PASSWORD,
    payload: AuthenticationApiCalls.resetPassword({ token, password })
  })
  .then((response) => {
    dispatch(layoutActions.showLoading(false));
    dispatch(push(`/reset-password/${token}/success`));
    return response;
  })
  .catch((response) => {
    dispatch(layoutActions.showLoading(false));
    return response.errors;
  });
};

export const authenticationActions = {
  handleLogin: login,
  handleSignUp: signUp,
  handleLogOut: logOut,
  handleForgotPassword: forgotPassword,
  handleResetPassword: resetPassword
};
