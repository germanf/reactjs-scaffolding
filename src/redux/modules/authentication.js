import { push } from 'react-router-redux';
import { userActions } from './user';
import { layoutActions } from './layout';
import Api from '../../api';
import { storeToken, clearToken } from '../../api/auth_token';

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
  }
};

// Actions
const LOGIN = 'app/authentication/LOGIN';
const SIGNUP = 'app/authentication/SIGNUP';

// Reducer
const AuthenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return { ...state, signIn: { loading: true } };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        signIn: {
          loading: false,
          error: {
            message: '',
            errors: {}
          }
        }
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        signIn: {
          loading: false,
          error: action.payload.error
        }
      };

    case `${SIGNUP}_PENDING`:
      return { ...state, signIn: { loggingIn: true } };
    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        signUp: {
          loading: false,
          error: {
            message: '',
            errors: {}
          }
        }
      };
    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        signUp: {
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
    dispatch(push('/'));
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
  handleLogOut: logOut
};
