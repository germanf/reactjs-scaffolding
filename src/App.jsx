import React from 'react';
import Layout from './layout';

import { userTypes, authenticationTypes } from './types';
import register from './utils/redux-register';

const App = props => (
  <Layout
    handleLogOut={props.handleLogOut}
    userLogged={props.userLogged}
    {...props}
  />
);

App.propTypes = {
  handleLogOut: authenticationTypes.handleLogOut.isRequired,
  userLogged: userTypes.userLogged.isRequired
};

export default register(
  ['userSelector'],
  ['authentication.handleLogOut'],
  App
);
