import { push } from 'react-router-redux';
import { userActions } from './user';
import { layoutActions } from './layout';
import Api from '../../api';
import { storeToken, clearToken, clearState } from '../../api/auth_token';

const { AuthenticationApiCalls } = Api;

// Initial State
const initialState = {
  signIn: {
    loading: false,
    error: {
      message: '',
      errors: {}
    }
  },
  signUp: {
    loading: false,
    error: {
      message: '',
      errors: {}
    }
  },
  forgotPassword: {
    loading: false,
    error: {
      message: '',
      errors: {}
    }
  },
  resetPassword: {
    loading: false,
    error: {
      message: '',
      errors: {}
    }
  }
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
      return { ...state, signIn: { ...state.signIn, loading: true } };
    case `${LOGIN}_FULFILLED`:
      return { ...state, signIn: { ...state.signIn, loading: false } };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        signIn: {
          loading: false,
          error: action.payload.error
        }
      };

    case `${SIGNUP}_PENDING`:
      return { ...state, signUp: { ...state.signUp, loading: true } };
    case `${SIGNUP}_FULFILLED`:
      return { ...state, signUp: { ...state.signUp, loading: true } };
    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        signUp: {
          loading: false,
          error: action.payload.error
        }
      };

    case `${FORGOT_PASSWORD}_PENDING`:
      return { ...state, forgotPassword: { ...state.forgotPassword, loading: true } };
    case `${FORGOT_PASSWORD}_FULFILLED`:
      return { ...state, forgotPassword: { ...state.forgotPassword, loading: false } };
    case `${FORGOT_PASSWORD}_REJECTED`:
      return {
        ...state,
        forgotPassword: {
          loading: false,
          error: action.payload.error
        }
      };

    case `${RESET_PASSWORD}_PENDING`:
      return { ...state, resetPassword: { ...state.resetPassword, loading: true } };
    case `${RESET_PASSWORD}_FULFILLED`:
      return { ...state, resetPassword: { ...state.resetPassword, loading: false } };
    case `${RESET_PASSWORD}_REJECTED`:
      return {
        ...state,
        resetPassword: {
          loading: false,
          error: action.payload.error
        }
      };
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
    payload: {
      promise: AuthenticationApiCalls.login({ email, password })
    }
  })
  .then((response) => {
    // remove token from object
    const { token, ...userData } = response.value.data;
    // store token in localStorage
    storeToken(token);
    // set User Data
    dispatch(userActions.handleSetUserData(userData));
    // set user logged
    dispatch(userActions.handleSetUserLogged());
    // Done!
    dispatch(layoutActions.showLoading(false));
  })
  .catch((response) => {
    dispatch(layoutActions.showLoading(false));
    return response.error;
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
    return response.error;
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
    return response.error;
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
    return response.error;
  });
};

export const authenticationActions = {
  handleLogin: login,
  handleSignUp: signUp,
  handleLogOut: logOut,
  handleForgotPassword: forgotPassword,
  handleResetPassword: resetPassword
};
