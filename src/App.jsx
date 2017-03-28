import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './redux/modules/user';
import Layout from './layout';
import * as authActions from './redux/modules/authentication';

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
  logOut: React.PropTypes.func.isRequired,
  getUser: React.PropTypes.func.isRequired,
  userLogged: React.PropTypes.bool.isRequired,
  setUserLogged: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userLogged: state.user.userLogged
});

export default connect(mapStateToProps, {
  logOut: authActions.logOut,
  getUser: userActions.getUser,
  setUserLogged: userActions.setUserLogged
})(App);
