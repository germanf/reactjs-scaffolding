import React from 'react';
import { Provider } from 'react-redux';
import Layout from './Layout';

// Redux
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Layout onClick={this.lala} />
  </Provider>
);

export default App;
