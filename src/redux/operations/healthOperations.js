import axios from 'axios';
import healthActions from '../actions/healthActions';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const getUserInfoOperation = () => async dispatch => {
  dispatch(healthActions.getUserInfoRequest);
  try {
    const response = await axios.get('/user');
    dispatch(healthActions.getUserInfoSuccess(response.data));
  } catch (error) {
    dispatch(healthActions.getUserInfoError(error));
  }
};

const getDailyRateOperation = (data, id = '') => async dispatch => {
  dispatch(healthActions.getDailyRateRequest);
  try {
    const endpoint = id ? `/daily-rate/${id}` : '/daily-rate';
    const response = await axios.post(endpoint, data);
    dispatch(healthActions.getDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(healthActions.getDailyRateError(error));
  }
};

export default {
  getUserInfoOperation,
  getDailyRateOperation,
};
