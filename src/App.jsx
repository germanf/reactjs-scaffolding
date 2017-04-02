import React, { Component, PropTypes } from 'react';
import Layout from './layout';

import { userTypes } from './types';
import register from './utils/redux-register';

import { userIsAuthenticated } from './api/auth_token';

class App extends Component {
  componentDidMount() {
    if (userIsAuthenticated()) {
      this.props.setUserLogged();
      this.props.getUser();
    }
  }
  render() {
    return (
      <Layout
        handleLogOut={this.props.logOut}
        userLogged={this.props.userLogged}
      />
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  userLogged: userTypes.userLogged.isRequired,
  setUserLogged: PropTypes.func.isRequired
};

export default register(
  ['userSelector'],
  ['user.getUser', 'user.setUserLogged', 'authentication.logOut'],
  App
);
