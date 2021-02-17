import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';
import healthActions from '../actions/healthActions';

const loaderReducer = createReducer(false, {
  //==========================================authActions
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,

  //==========================================healthActions
  [healthActions.getUserInfoRequest]: () => true,
  [healthActions.getUserInfoSuccess]: () => false,
  [healthActions.getUserInfoError]: () => false,

  [healthActions.getDailyRateRequest]: () => true,
  [healthActions.getDailyRateSuccess]: () => false,
  [healthActions.getDailyRateError]: () => false,

  [healthActions.getProductRequest]: () => true,
  [healthActions.getProductSuccess]: () => false,
  [healthActions.getProductError]: () => false,

  [healthActions.getDayInfoRequest]: () => true,
  [healthActions.getDayInfoSuccess]: () => false,
  [healthActions.getDayInfoError]: () => false,

  [healthActions.postEatenProductRequest]: () => true,
  [healthActions.postEatenProductSuccess]: () => false,
  [healthActions.postEatenProductError]: () => false,
});

export default loaderReducer;
