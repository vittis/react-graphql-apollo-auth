import NotFoundPage from 'pages/NotFoundPage/Loadable';
// import HomePage from 'pages/HomePage/Loadable';
import MeuAprendizadoPage from 'pages/MeuAprendizadoPage/Loadable';
import Insights from 'pages/Insights/Loadable';
import LoginPage from 'pages/LoginPage/Loadable';
import * as pathNames from 'routes/pathNames';

export const routes = [
  {
    path: pathNames.BASE_PATH,
    component: LoginPage,
    exact: true,
  },
  {
    path: pathNames.LOGIN,
    component: LoginPage,
  },
  {
    path: pathNames.LEARNER_HOME,
    component: MeuAprendizadoPage,
  },
  {
    path: pathNames.ADMIN_HOME,
    component: Insights,
  },
  {
    path: '',
    component: NotFoundPage,
  },
];
