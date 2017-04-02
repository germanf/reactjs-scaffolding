import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reduxReset from 'redux-reset';
import { throttle } from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from '../utils/redux-local-state';
import error from './middlewares/error';
import reducers from './reducers';

const persistedState = loadState();
const middleware = applyMiddleware(error, promise(), thunk, logger());

const enHanceCreateStore = compose(
    middleware,
    reduxReset()  // Will use 'RESET' as default action.type to trigger reset
)(createStore);

const store = enHanceCreateStore(reducers, persistedState);

store.subscribe(throttle(() => {
  const st = store.getState();
  saveState({
    user: st.user
  });
}, 1000));

export default store;
