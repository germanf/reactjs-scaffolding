import Api from '../../utils/request';

const AuthenticationApiCalls = {

  login: ({ email, password }) => Api.post('/open/user/login', { email, password }, false),

  signUp: ({ name, email, password }) => Api.post('/open/user', { name, email, password }, false),

  forgotPassword: ({ email }) => Api.post('/forgot-password', { email }, false),

  resetPassword: ({ token, password }) => Api.post('/reset-password', { token, password }, false)

};

export default AuthenticationApiCalls;
