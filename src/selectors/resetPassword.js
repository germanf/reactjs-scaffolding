import createSelector from '../utils/create-selector';

const getResetPasswordPassword = ({ authentication }) => ({
  resetPassword: authentication.resetPassword
});

export default createSelector(
  getResetPasswordPassword
);
