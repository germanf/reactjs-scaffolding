import React from 'react';
import Layout from './layout';

import { userTypes, authenticationTypes } from './types';
import register from './utils/redux-register';

const App = props => (
  <Layout {...props} />
);

export default App;
