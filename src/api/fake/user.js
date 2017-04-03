import config from '../../config';
import { getToken } from '../auth_token';

const UserApiCalls = {

  getUser: () => {
    let promise;
    if (!getToken()) {
      // Get error when the token is not saved in the localStorage
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'You are not logged in',
          errors: {}
        }
      }), config.requestTime));
    } else {
      // return user data
      promise = new Promise(resolve => setTimeout(() => resolve({
        data: {
          email: 'aruj.damian@gmail.com',
          name: 'Damian',
          lastName: 'Aruj'
        }
      }), config.requestTime));
    }
    return promise;
  }

};

export default UserApiCalls;
