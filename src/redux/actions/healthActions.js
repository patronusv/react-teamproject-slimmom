import { createAction } from '@reduxjs/toolkit';

const getUserInfoRequest = createAction('health/getUserInfoRequest');
const getUserInfoSuccess = createAction('health/getUserInfoSuccess');
const getUserInfoError = createAction('health/getUserInfoError');

const getDailyRateRequest = createAction('health/getDailyRateRequest');
const getDailyRateSuccess = createAction('health/getDailyRateSuccess');
const getDailyRateError = createAction('health/getDailyRateError');

export default {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
  getDailyRateRequest,
  getDailyRateSuccess,
  getDailyRateError,
};
