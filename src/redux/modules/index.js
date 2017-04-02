import { routerReducer as rooter } from 'react-router-redux';
import user, { userActions } from './user';
import authentication, { authenticationActions } from './authentication';
import layout, { layoutActions } from './layout';


const actions = {
  user: userActions,
  authentication: authenticationActions,
  layout: layoutActions
};

const reducers = {
  user,
  authentication,
  layout,
  rooter
};

export { reducers, actions };
