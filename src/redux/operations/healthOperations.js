import axios from 'axios';
import moment from 'moment';
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

const getProductOperation = query => async dispatch => {
  dispatch(healthActions.getProductRequest);
  try {
    const response = await axios.get(`/product?search=${query}`);
    dispatch(healthActions.getProductSuccess(response.data));
  } catch (error) {
    dispatch(healthActions.getProductError(error));
  }
};

const getDayInfoOperation = (
  date = { date: moment(Date.now()).format('YYYY-MM-DD') },
) => async dispatch => {
  dispatch(healthActions.getDayInfoRequest());
  try {
    const response = await axios.post('/day/info', date);
    response.data.eatenProducts
      ? dispatch(healthActions.getDayInfoSuccess(response.data))
      : dispatch(
          healthActions.getDayInfoSuccess({
            date: date.date,
            eatenProducts: [],
            daySummary: {},
          }),
        );
  } catch (error) {
    dispatch(healthActions.getDayInfoError(error));
  }
};

const postEatenProductOperation = product => async dispatch => {
  dispatch(healthActions.postEatenProductRequest());
  try {
    const response = await axios.post('/day', product);
    dispatch(healthActions.postEatenProductSuccess(response.data));
  } catch (error) {
    dispatch(healthActions.postEatenProductError(error));
  }
};


const deleteDiaryItemOperation = (id) => async(dispatch,getState) =>{
  const dayId = getState().health.dayInfo.id;
  const token = getState().auth.accessToken;
  console.log('dayId', dayId)
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
 
      dispatch(healthActions.deleteDiaryItemRequest());
  
      try {
          const response = await axios.delete('/day',
            {
              dayId: dayId,
              eatenProductId: id
            }
          );
   
          console.log(response);
          dispatch(healthActions.deleteDiaryItemSuccess(id));
        } catch (error) {
          dispatch(healthActions.deleteDiaryItemError(error.message));
        } finally {
          dispatch(healthActions.deleteDiaryItemRequest());
        }
  
  }

export default {
  getUserInfoOperation,
  getDailyRateOperation,
  getProductOperation,
  getDayInfoOperation,
  postEatenProductOperation,
  deleteDiaryItemOperation
};
