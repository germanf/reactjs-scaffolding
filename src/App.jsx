// This line is for eslint to ignore not found variable error:
/* global document, DEVELOPMENT */
import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import Index from './components/Index';
import NotFound from './components/NotFound';

// React render
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Index} >
        <IndexRoute component={Index} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);

// This will be injected in the build module.
if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}
