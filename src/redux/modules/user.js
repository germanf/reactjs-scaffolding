import Api from '../../api';

const { UserApiCalls } = Api;

// Initial State
const initialState = {
  getUser: {
    loading: false,
    error: {
      message: '',
      errors: {}
    }
  },
  data: {
    email: '',
    name: '',
    lastName: ''
  },
  userLogged: false
};

// Actions
const SET_USER_DATA = 'app/user/SET_USER_DATA';
const GET_USER = 'app/user/GET_USER';
const SET_USER_LOGGED = 'app/user/SET_USER_LOGGED';

// Reducer
const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return { ...state, getUser: { loading: true } };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        getUser: {
          loading: false,
          error: {
            message: '',
            errors: {}
          }
        }
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        getUser: {
          loading: false,
          error: action.payload.error
        }
      };
    case SET_USER_DATA:
      return {
        ...state,
        data: action.payload.data
      };
    case SET_USER_LOGGED:
      return {
        ...state,
        userLogged: true
      };
    default: return state;
  }
};

export default UserReducer;

// **** Action Creators ***** //

/**
 * Set User Data Action
 * @param {Object} containing userData
 */
const setUserData = userData => ({
  type: SET_USER_DATA,
  payload: {
    data: userData
  }
});

/**
 * Get User Action
 */
const getUser = () => dispatch =>
  dispatch({
    type: GET_USER,
    payload: {
      promise: UserApiCalls.getUser()
    }
  })
  .then(response => dispatch(setUserData(response.value.data)))
  .catch(response => response.error);

/**
 * Set User Logged Action
 */
const setUserLogged = () => ({
  type: SET_USER_LOGGED
});


export const userActions = {
  handleSetUserData: setUserData,
  handleGetUser: getUser,
  handleSetUserLogged: setUserLogged
};
