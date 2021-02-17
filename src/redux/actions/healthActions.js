import { createAction } from '@reduxjs/toolkit';

const getUserInfoRequest = createAction('health/getUserInfoRequest');
const getUserInfoSuccess = createAction('health/getUserInfoSuccess');
const getUserInfoError = createAction('health/getUserInfoError');

const getDailyRateRequest = createAction('health/getDailyRateRequest');
const getDailyRateSuccess = createAction('health/getDailyRateSuccess');
const getDailyRateError = createAction('health/getDailyRateError');

const getProductRequest = createAction('health/getProductRequest');
const getProductSuccess = createAction('health/getProductSuccess');
const getProductError = createAction('health/getProductError');

const getDayInfoRequest = createAction('health/getDayInfoRequest');
const getDayInfoSuccess = createAction('health/getDayInfoSuccess');
const getDayInfoError = createAction('health/getDayInfoError');

const postEatenProductRequest = createAction('health/postEatenProductRequest');
const postEatenProductSuccess = createAction('health/postEatenProductSuccess');
const postEatenProductError = createAction('health/postEatenProductError');

export default {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
  getDailyRateRequest,
  getDailyRateSuccess,
  getDailyRateError,
  getProductRequest,
  getProductSuccess,
  getProductError,
  getDayInfoRequest,
  getDayInfoSuccess,
  getDayInfoError,
  postEatenProductRequest,
  postEatenProductSuccess,
  postEatenProductError,
};
