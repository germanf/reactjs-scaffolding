import axios from 'axios';

const AuthenticationApiCalls = {
  login: ({ email, password }) => axios.post('/api/authenticate', { email, password })
};

export default AuthenticationApiCalls;
