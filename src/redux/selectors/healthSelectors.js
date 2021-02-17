const getDaySummary = state => state.health.dayInfo.getDaySummary;
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
