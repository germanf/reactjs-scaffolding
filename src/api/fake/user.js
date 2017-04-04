import config from '../../config';
import { getToken } from '../auth_token';

const UserApiCalls = {

  getUser: () => {
    let promise;
    if (!getToken()) {
      // Get error when the token is not saved in the localStorage
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        status: 'error',
        message: 'You are not logged In',
        errors: []
      }), config.requestTime));
    } else {
      // return user data
      promise = new Promise(resolve => setTimeout(() => resolve({
        status: 'success',
        message: 'User data retrieved',
        data: {
          email: 'aruj.damian@gmail.com',
          name: 'Dami',
          lastName: 'Aruj'
        }
      }), config.requestTime));
    }
    return promise;
  }

};

export default UserApiCalls;
