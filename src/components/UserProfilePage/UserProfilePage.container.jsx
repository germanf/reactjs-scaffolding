import React from 'react';
import { connect } from 'react-redux';
import UserProfilePage from './UserProfilePage';

const UserProfilePageContainer = ({ user }) => (
  <UserProfilePage user={user} />
);

UserProfilePageContainer.propTypes = {
  user: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  user: state.user.data
});

export default connect(mapStateToProps, {})(UserProfilePageContainer);
