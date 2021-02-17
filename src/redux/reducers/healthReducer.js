import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import healthActions from '../actions/healthActions';
import authActions from '../actions/authActions';

const initialState = {
  userData: {},
  days: [],
};

const userInfoReducer = createReducer(initialState, {
  [healthActions.getUserInfoSuccess]: (_, { payload }) => ({
    userData: payload.userData,
    days: payload.days,
  }),
  [authActions.logOutSuccess]: () => initialState,
});

const dailyRateReducer = createReducer(
  {},
  {
    [healthActions.getDailyRateSuccess]: (_, { payload }) => payload,
    [authActions.logOutSuccess]: () => {},
  },
);

const healthReducer = combineReducers({
  userInfo: userInfoReducer,
  dailyRate: dailyRateReducer,
});

export default healthReducer;
