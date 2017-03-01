// This line is for eslint to ignore not found variable error:
/* global document, DEVELOPMENT */
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

import Index from './components'

// React render
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('app'),
);

// This will be injected in the build module.
if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}
