import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import NotFoundPage from './components/NotFoundPage';
import UserProfilePage from './components/UserProfilePage';

const routes = [
  {
    path: '/',
    exact: true,
    secure: false,
    component: HomePage
  },
  {
    path: '/login',
    secure: false,
    component: SignInPage
  },
  {
    path: '/user',
    secure: true,
    component: UserProfilePage
  },
  {
    path: '',
    secure: false,
    component: NotFoundPage
  }
];

export default routes;
