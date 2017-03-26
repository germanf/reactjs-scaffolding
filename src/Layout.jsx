import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import routes from './Routes';

const Layout = () => (
  <Router>
    <div className="root">
      <div className="wrap">
        <header>This is my Header</header>

        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={() => (
                <div className="content">
                  <route.component />
                </div>
              )}
            />
          ))}
        </Switch>

        <footer>WhitePrompt.com</footer>

      </div>

    </div>
  </Router>
);

export default Layout;
