import createSelector from '../utils/create-selector';

const getUser = ({ user }) => ({
  user: user.data,
  userLogged: user.userLogged
});

export default createSelector(
  getUser
);
