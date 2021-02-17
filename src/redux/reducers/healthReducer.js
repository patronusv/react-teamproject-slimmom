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

const productReducer = createReducer([], {
  [healthActions.getProductSuccess]: (_, { payload }) => payload,
  [authActions.logOutSuccess]: () => [],
});

const dayInfoReducer = createReducer(
  {},
  {
    [healthActions.getDayInfoSuccess]: (_, { payload }) => payload,
    [healthActions.postEatenProductSuccess]: (state, { payload }) => ({
      ...state,
      eatenProducts: [...state.eatenProducts, payload.eatenProduct],
      daySummary: payload.daySummary,
    }),
    [authActions.logOutSuccess]: () => {},
  },
);

const healthReducer = combineReducers({
  userInfo: userInfoReducer,
  dailyRate: dailyRateReducer,
  product: productReducer,
  dayInfo: dayInfoReducer,
});

export default healthReducer;
