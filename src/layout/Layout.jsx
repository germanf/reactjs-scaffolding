import React, { PropTypes } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import routes from '../Routes';

import LoadingSpinner from '../components/shared/LoadingSpinner';
import { userIsAuthenticated } from '../api/auth_token';
import register from '../utils/redux-register';

import '../assets/css/style.scss';
import styles from './Layout.scss';

const Layout = ({ handleLogOut, userLogged, loading, history }) => (
  <ConnectedRouter history={history}>
    <div className="root">
      <div className="wrap">
        <header className={styles.header}>WhitePrompt Scaffolding 2.0</header>
        <nav className={styles.nav}>
          {userLogged ? (
            <ul className={styles.content}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/user">User</Link></li>
              <li>
                <a
                  href="/logout"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleLogOut();
                  }}
                >LogOut</a>
              </li>
            </ul>
          ) : (
            <ul className={styles.content}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">SignIn</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
            </ul>
          )}
        </nav>
        <Switch>
          {routes.filter(r => r.path === '/login').map(route => (
            <Route
              path={route.path}
              key={route.path}
              render={props => (userLogged ? (
                <Redirect
                  to={{
                    pathname: '/',
                    state: { from: props.location }
                  }}
                />
              ) : (
                <div className={styles.content}>
                  <route.component />
                </div>
              ))}
            />
          ))}
          {routes.filter(r => r.path !== '/login').map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={props => ((!route.secure || (route.secure && userIsAuthenticated())) ? (
                <div className={styles.content}>
                  <route.component />
                </div>
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }}
                />
              ))}
            />
          ))}
        </Switch>

        <footer className={styles.footer}>WhitePrompt.com</footer>

      </div>
      <LoadingSpinner active={loading} />
    </div>
  </ConnectedRouter>
);

Layout.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
  userLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired
};

export default register(
  ['userSelector', 'layoutSelector'],
  ['authentication.handleLogOut'],
  Layout
);
