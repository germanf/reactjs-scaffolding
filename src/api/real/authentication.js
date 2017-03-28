import Api from '../../utils/request';

const AuthenticationApiCalls = {
  login: ({ email, password }) => Api.post('/authenticate', { email, password }, true),
  signUp: ({ name, email, password }) => Api.post('/authenticate', { name, email, password }, true)
};

export default AuthenticationApiCalls;
