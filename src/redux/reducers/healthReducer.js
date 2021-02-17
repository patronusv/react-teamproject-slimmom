import { createReducer } from '@reduxjs/toolkit';
import {
  addDailyCaloriesRequest,
  addDailyCaloriesSuccess,
  addDailyCaloriesError,
  //   getDailyCaloriesRequest,
  //   getDailyCaloriesSuccess,
  //   getDailyCaloriesError,
} from '../actions/healthActions';

const initialState = {
  dailyRate: [],

  error: '',
};

const healthReducer = createReducer(
  { ...initialState },
  {
    [addDailyCaloriesRequest]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [addDailyCaloriesSuccess]: (state, action) => ({
      ...state,
      dailyRate: [...state.dailyRate, action.payload],
      isLoading: false,
    }),
    [addDailyCaloriesError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
);

export default healthReducer;
