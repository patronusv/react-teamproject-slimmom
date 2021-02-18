const getDaySummary = state => state.health.dayInfo.daySummary;
const getEatenProducts = state => state.health.dayInfo.eatenProducts;
const getNotAllowedProducts = state =>
  state.health.dailyRate.notAllowedProducts;
const isLoading = state => state.loading;

export default {
  getDaySummary,
  getEatenProducts,
  getNotAllowedProducts,
  isLoading,
};
