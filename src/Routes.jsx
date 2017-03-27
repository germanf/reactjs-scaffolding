import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
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
    path: '/sign-in',
    secure: false,
    component: SignInPage
  },
  {
    path: '/sign-up',
    secure: false,
    component: SignUpPage
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
