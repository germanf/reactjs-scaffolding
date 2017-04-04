import Api from '../../api';
import { getResponseObject, getDefaultRequestObject } from '../../utils/request';
import { layoutActions } from './layout';

const { UserApiCalls } = Api;

// Initial State
const initialState = {
  getUserRequest: getDefaultRequestObject,
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
      return { ...state, getUserRequest: getResponseObject('PENDING', action.payload) };
    case `${GET_USER}_FULFILLED`:
      return { ...state, getUserRequest: getResponseObject('FULFILLED', action.payload) };
    case `${GET_USER}_REJECTED`:
      return { ...state, getUserRequest: getResponseObject('REJECTED', action.payload) };

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
const getUser = () => (dispatch) => {
  dispatch(layoutActions.showLoading(true));
  dispatch({
    type: GET_USER,
    payload: UserApiCalls.getUser()
  })
  .then((response) => {
    dispatch(layoutActions.showLoading(false));
    dispatch(setUserData(response.value.data));
  })
  .catch((response) => {
    dispatch(layoutActions.showLoading(false));
    return response.errors;
  });
};

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
