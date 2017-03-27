import Api from '../../api';

const { UserApiCalls } = Api;

// Initial State
const initialState = {
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

// Reducer
const UserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.payload.data,
        userLogged: true
      };
    default: return state;
  }
};

export default UserReducer;
// Action Creators
export const setUserData = userData => ({
  type: SET_USER_DATA,
  payload: {
    data: userData
  }
});

export const getUser = () => dispatch =>
  dispatch({
    type: GET_USER,
    payload: {
      promise: UserApiCalls.getUser()
    }
  })
  .then(response => dispatch(setUserData(response.value.data)))
  .catch(response => response.error);
