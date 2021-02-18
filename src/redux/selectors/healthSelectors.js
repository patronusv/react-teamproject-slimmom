const getDaySummary = state => state.health.dayInfo.daySummary;
const getEatenProducts = state => state.health.dayInfo.eatenProducts;
const getNotAllowedProducts = state =>
  state.health.dailyRate.notAllowedProducts;
const getDailyRate = state => state.health.dailyRate;
<<<<<<< HEAD

const getDate = state => state.health.getDate.date;
const getProducts = state => state.health.product;
=======
>>>>>>> dev

export default {
  getDaySummary,
  getEatenProducts,
  getNotAllowedProducts,
  getDailyRate,
<<<<<<< HEAD
  getDate,
  getProducts
=======
>>>>>>> dev
};
