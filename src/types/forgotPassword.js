import { PropTypes } from 'react';

export default PropTypes.shape({
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({})
});
