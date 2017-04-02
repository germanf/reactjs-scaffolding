import createSelector from '../utils/create-selector';

const getSignUp = ({ authentication }) => ({
  signUp: authentication.signUp
});

export default createSelector(
  getSignUp
);
