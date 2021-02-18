const getDaySummary = state => state.health.dayInfo.daySummary;
const getEatenProducts = state => state.health.dayInfo.eatenProducts;
const getNotAllowedProducts = state =>
  state.health.dailyRate.notAllowedProducts;

export default {
  getDaySummary,
  getEatenProducts,
  getNotAllowedProducts,
};
