import React from 'react';
import { userTypes } from '../../types';
import register from '../../utils/redux-register';
import HomePage from './HomePage';

const HomePageContainer = ({ user }) => (
  <HomePage user={user} />
);

HomePageContainer.propTypes = {
  user: userTypes.user.isRequired
};

export default register(
  ['userSelector'],
  [],
  HomePageContainer
);

