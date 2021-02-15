import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/home/Home' /* webpackChunkName: "HomePage"*/)),
    private: false,
    // restricted: false,
  },
  {
    path: '/register',
    name: 'Register',
    exact: false,
    component: lazy(() => import('../pages/registration/Registration' /* webpackChunkName: "RegistrationPage"*/)),
    private: false,
    // restricted: true,
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: lazy(() => import('../pages/login/Login' /* webpackChunkName: "LoginPage"*/)),
    private: false,
    // restricted: true,
  },
  {
    path: '/diary',
    name: 'Diary',
    exact: false,
    component: lazy(() => import('../pages/diary/Diary' /* webpackChunkName: "DiaryPage"*/)),
    private: true,
    // restricted: false,
  },
  {
    path: '/calculator',
    name: 'Calculator',
    exact: false,
    component: lazy(() => import('../pages/calculator/Calculator' /* webpackChunkName: "CalculatorPage"*/)),
    private: true,
    // restricted: false,
  },
];

export default mainRoutes;
