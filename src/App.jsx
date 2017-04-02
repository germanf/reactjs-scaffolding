import React, { Component, PropTypes } from 'react';
import Layout from './layout';

import { userTypes } from './types';
import register from './utils/redux-register';

class App extends Component {
  componentDidMount() {
    if (this.props.userLogged) {
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
  userLogged: userTypes.userLogged.isRequired
};

export default register(
  ['userSelector'],
  ['user.getUser', 'authentication.logOut'],
  App
);
