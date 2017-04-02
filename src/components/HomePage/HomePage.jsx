import React from 'react';
import { userTypes } from '../../types';
import { userIsAuthenticated } from '../../api/auth_token';

const HomePage = ({
  user
}) => (
  <div>
    Welcome { userIsAuthenticated() ? `Back ${user.name} ${user.lastName}` : 'to the Scaffolding 2.0' }
  </div>
);

HomePage.propTypes = {
  user: userTypes.user.isRequired
};

export default HomePage;
