import axios from 'axios';
import { getToken } from '../auth_token';

const UserApiCalls = {
  getUser: () => axios.get('/api/user/me', { getToken })
};

export default UserApiCalls;
