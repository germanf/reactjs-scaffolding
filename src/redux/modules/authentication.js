import { setUserData } from './user';
import Api from '../../api';
import { storeToken, clearToken } from '../../api/auth_token';

const { AuthenticationApiCalls } = Api;

// Initial State
const initialState = {
  signIn: {
    loggingIn: false,
    error: null
  }
};

// Actions
const LOGIN = 'app/authentication/LOGIN';

// Reducer
const AuthenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return { ...state, signIn: { loggingIn: true } };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        signIn: {
          loggingIn: false
        }
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        signIn: {
          loggingIn: false,
          error: action.payload.error.message
        }
      };
    default: return state;
  }
};

export default AuthenticationReducer;
// Action Creators

export const login = ({
  email,
  password
}) => dispatch =>
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
    dispatch(setUserData(userData));
  })
  .catch(response => response.error);

export const logOut = () => (dispatch) => {
  clearToken();
  dispatch({ type: 'RESET' });
};

