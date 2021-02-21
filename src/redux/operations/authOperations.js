import axios from 'axios';
import authActions from '../actions/authActions';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerOperation = data => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post(`/auth/register`, data);
    token.set(response.data.accessToken);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};
const loginOperation = data => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post(`/auth/login`, data);
    token.set(response.data.accessToken);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};
const logOutOperation = () => async dispatch => {
  dispatch(authActions.logOutRequest());
  try {
    await axios.post(`/auth/logout`);
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error));
  }
};
const refreshOperation = () => async (dispatch, getState) => {
  const {
    auth: {
      refreshToken: persistRefreshToken,
      accessToken: persistAccessToken,
      sid: persistSid,
    },
  } = getState();
  if (!persistRefreshToken) return;
  token.set(persistRefreshToken);
  dispatch(authActions.refreshRequest());
  try {
    const response = await axios.post(`/auth/refresh`, { sid: persistSid });
    if (response?.data) {
      dispatch(authActions.refreshSuccess(response.data));
      token.set(response.data.newAccessToken);
      const userResponse = await axios.get('/user');
      dispatch(authActions.getCurrentUserSuccess(userResponse.data));
    }
  } catch (error) {
    console.log('error', error);
    await dispatch(authActions.refreshError(error));
    await dispatch(authActions.logOutSuccess());
    throw new Error(error);
  }
};
export default {
  registerOperation,
  loginOperation,
  logOutOperation,
  refreshOperation,
};
