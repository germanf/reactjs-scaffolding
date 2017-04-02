import createSelector from '../utils/create-selector';

const getBasicData = ({ user }) => ({
  user: user.data,
  userLogged: user.userLogged
});

export default createSelector(
  getBasicData
);
