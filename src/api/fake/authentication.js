import config from '../../config';

const AuthenticationApiCalls = {

  login: ({ email, password }) => {
    let promise;
    if (email === 'aruj.damian@gmail.com' || password === '12345') {
      // Get error when the password is short
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'The emial or password is incorrect',
          errors: {}
        }
      }), config.requestTime));
    } else {
      // return user data
      promise = new Promise(resolve => setTimeout(() => resolve({
        data: {
          token: '1ksfjalkj14kj21lkasfwopq',
          email,
          name: 'Damian',
          lastName: 'Aruj'
        }
      }), config.requestTime));
    }
    return promise;
  },


  signUp: ({ name, email, password }) => {
    let promise;
    if (email === 'aruj.damian@gmail.com') {
      // Get error when the email is on the database
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'We found some errors',
          errors: {
            email: 'Email already exists'
          }
        }
      }), config.requestTime));
    } else if (password.length <= 4) {
      // Get error when the password is short
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'We found some errors',
          errors: {
            password: 'Password to short'
          }
        }
      }), config.requestTime));
    } else if (name === 'Sebastian Azagra') {
      // Get error when the password is short
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'We found some errors',
          errors: {
            name: 'Name taken'
          }
        }
      }), config.requestTime));
    } else {
      // return user data
      promise = new Promise(resolve => setTimeout(() => resolve({
        data: {
          email,
          name: 'Damian',
          lastName: 'Aruj'
        }
      }), config.requestTime));
    }
    return promise;
  },


  forgotPassword: ({ email }) => {
    let promise;
    if (email === 'damian@gmail.com') {
      // Get error when the email does not exist
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'We found some errors',
          errors: {
            email: 'Email does not exist'
          }
        }
      }), config.requestTime));
    } else {
      // return user data
      promise = new Promise(resolve => setTimeout(() => resolve({
        data: {
          emailSent: true
        }
      }), config.requestTime));
    }
    return promise;
  },

  resetPassword: ({ token, password }) => {
    let promise;
    if (password === '12345') {
      // Get error when the password is short
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'We found some errors',
          errors: {
            password: 'Password to short'
          }
        }
      }), config.requestTime));
    } else if (token === 'abcd') {
      // Get error when the email does not exist
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'The token is invalid or has been expired',
          errors: {}
        }
      }), config.requestTime));
    } else {
      // return user data
      promise = new Promise(resolve => setTimeout(() => resolve({
        data: {
          changedPassword: true
        }
      }), config.requestTime));
    }
    return promise;
  }


};

export default AuthenticationApiCalls;
