import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from '../actions/authActions';

const initialState = { name: '', email: '', userData: {}, id: '' };
console.log('authActions', authActions);

const userReducer = createReducer(initialState, {
  //   [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logOutSuccess]: () => initialState,
});
const accessTokenReducer = createReducer(null, {
  //   [authActions.registerSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logOutSuccess]: () => null,
});
const refreshTokenReducer = createReducer(null, {
  //   [authActions.registerSuccess]: (_, { payload }) => payload.refreshToken,
  [authActions.loginSuccess]: (_, { payload }) => payload.refreshToken,
  [authActions.logOutSuccess]: () => null,
});
const sidReducer = createReducer(null, {
  //   [authActions.registerSuccess]: (_, { payload }) => payload.sid,
  [authActions.loginSuccess]: (_, { payload }) => payload.sid,
  [authActions.logOutSuccess]: () => null,
});

const authReducer = combineReducers({
  user: userReducer,
  accessToken: accessTokenReducer,
  refreshToken: refreshTokenReducer,
  sid: sidReducer,
});

export default authReducer;
