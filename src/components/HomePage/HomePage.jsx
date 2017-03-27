import React from 'react';

import { userIsAuthenticated } from '../../api/auth_token';

const HomePage = ({
  name,
  lastName
}) => (
  <div>
    Welcome { userIsAuthenticated() ? `Back ${name} ${lastName}` : 'to the Scaffolding 2.0' }
  </div>
);

HomePage.propTypes = {
  name: React.PropTypes.string,
  lastName: React.PropTypes.string
};

HomePage.defaultProps = {
  name: 'Damian',
  lastName: 'Aruj'
};

export default HomePage;
