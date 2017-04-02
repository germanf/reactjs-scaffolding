import { PropTypes } from 'react';

export default {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }),
  userLogged: PropTypes.bool
};
