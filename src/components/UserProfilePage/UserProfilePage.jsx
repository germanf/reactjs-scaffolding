import React from 'react';

const UserProfilePage = ({ user }) => (
  <div>
    <h1>User Profile</h1>
    <div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Last Name:</strong> {user.lastName}
      </div>
    </div>
  </div>
);

UserProfilePage.propTypes = {
  user: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired
  }).isRequired
};

export default UserProfilePage;
