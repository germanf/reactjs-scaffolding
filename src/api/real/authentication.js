import Api from '../../utils/request';

const AuthenticationApiCalls = {
  login: ({ email, password }) => Api.post('/authenticate', { email, password }, true)
};

export default AuthenticationApiCalls;
