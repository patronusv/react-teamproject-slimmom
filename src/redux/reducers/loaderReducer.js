import { createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const loaderReducer = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
});

export default loaderReducer;
