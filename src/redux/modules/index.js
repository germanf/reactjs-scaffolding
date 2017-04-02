import user, { userActions } from './user';
import authentication, { authenticationActions } from './authentication';

const actions = {
  user: userActions,
  authentication: authenticationActions
};

const reducers = {
  user,
  authentication
};

export { reducers, actions };
