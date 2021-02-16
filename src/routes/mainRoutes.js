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
    path: '/login',
    name: 'Вход',
    exact: false,
    component: lazy(() => import('../pages/login/Login' /* webpackChunkName: "LoginPage"*/)),
    private: false,
    // restricted: true,
  },
  {
    path: '/register',
    name: 'Регистрация',
    exact: false,
    component: lazy(() => import('../pages/registration/Registration' /* webpackChunkName: "RegistrationPage"*/)),
    private: false,
    // restricted: true,
  },
  {
    path: '/diary',
    name: 'Дневник',
    exact: false,
    component: lazy(() => import('../pages/diary/Diary' /* webpackChunkName: "DiaryPage"*/)),
    private: true,
    // restricted: false,
  },
  {
    path: '/calculator',
    name: 'Калькулятор',
    exact: false,
    component: lazy(() => import('../pages/calculator/Calculator' /* webpackChunkName: "CalculatorPage"*/)),
    private: true,
    // restricted: false,
  },
];

export default mainRoutes;
