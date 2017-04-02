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
      }), 3000));
    } else {
      // return user data
      promise = new Promise(resolve => setTimeout(() => resolve({
        data: {
          token: '1ksfjalkj14kj21lkasfwopq',
          email,
          name: 'Damian',
          lastName: 'Aruj'
        }
      }), 3000));
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
      }), 3000));
    } else if (password.length <= 4) {
      // Get error when the password is short
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'We found some errors',
          errors: {
            password: 'Password to short'
          }
        }
      }), 3000));
    } else if (name === 'Sebastian Azagra') {
      // Get error when the password is short
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'We found some errors',
          errors: {
            name: 'Name taken'
          }
        }
      }), 3000));
    } else {
      // return user data
      promise = new Promise(resolve => setTimeout(() => resolve({
        data: {
          token: '1ksfjalkj14kj21lkasfwopq',
          email,
          name: 'Damian',
          lastName: 'Aruj'
        }
      }), 3000));
    }
    return promise;
  }
};

export default AuthenticationApiCalls;
