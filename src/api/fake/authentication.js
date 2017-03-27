const AuthenticationApiCalls = {
  login: ({ email, password }) => {
    let promise;
    if (email === 'damian@gmail.com') {
      // Get error when the email is on the database
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'The email already exist in our database'
        }
      }), 3000));
    } else if (password.length <= 4) {
      // Get error when the password is short
      promise = new Promise((resolve, reject) => setTimeout(() => reject({
        error: {
          message: 'Password too short'
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
