/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';

import getStore from './redux/store';
import App from './App';

const history = createHistory();
const store = getStore(history);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const appReloaded = require('./App').default;
    render(appReloaded);
  });
}
