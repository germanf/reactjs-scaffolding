import createSelector from '../utils/create-selector';

const getForgotPassword = ({ authentication }) => ({
  forgotPassword: authentication.forgotPassword
});

export default createSelector(
  getForgotPassword
);
