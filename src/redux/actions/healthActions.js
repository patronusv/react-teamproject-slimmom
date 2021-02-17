import { createAction } from '@reduxjs/toolkit';

const addDailyCaloriesRequest = createAction('health/addDailyCaloriesRequest');
const addDailyCaloriesSuccess = createAction('health/addDailyCaloriesSuccess');
const addDailyCaloriesError = createAction('health/addDailyCaloriesError');

const getDailyCaloriesRequest = createAction('health/getDailyCaloriesRequest');
const getDailyCaloriesSuccess = createAction('health/getDailyCaloriesSuccess');
const getDailyCaloriesError = createAction('health/getDailyCaloriesError');

export {
  addDailyCaloriesRequest,
  addDailyCaloriesSuccess,
  addDailyCaloriesError,
  getDailyCaloriesRequest,
  getDailyCaloriesSuccess,
  getDailyCaloriesError,
};
