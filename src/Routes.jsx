import Home from './components/Home';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound/';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/sign-in',
    component: SignIn
  }
];

export default routes;
