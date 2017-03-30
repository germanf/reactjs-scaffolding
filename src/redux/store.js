import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reduxReset from 'redux-reset';

import error from './middlewares/error';
import reducers from './reducers';

const middleware = applyMiddleware(error, promise(), thunk, logger());

const enHanceCreateStore = compose(
    middleware,
    reduxReset()  // Will use 'RESET' as default action.type to trigger reset
)(createStore);

const store = enHanceCreateStore(reducers);


export default store;
