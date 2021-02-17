import axios from 'axios';
import {
  addDailyCaloriesRequest,
  addDailyCaloriesSuccess,
  addDailyCaloriesError,
  //   getDailyCaloriesRequest,
  //   getDailyCaloriesSuccess,
  //   getDailyCaloriesError,
} from '../actions/healthActions';

const addDailyCaloriesFormOperation = data => async dispatch => {
  dispatch(addDailyCaloriesRequest());
  try {
    const response = await axios.post(
      `https://slimmom-backend.goit.global/daily-rate`,
      data,
    );
    dispatch(addDailyCaloriesSuccess(response.data));
    console.log('response', response.data);
  } catch (error) {
    dispatch(addDailyCaloriesError(error));
  }
};

export { addDailyCaloriesFormOperation };
