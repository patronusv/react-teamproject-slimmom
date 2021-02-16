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

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  axios
    .post('/auth/register', credentials)
    .then(response => {
      console.log('credentials:', credentials);
      console.log('register response:', response);
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerError(error)));
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());
  axios
    .post('/auth/login', credentials)
    .then(response => {
      console.log('credentials login:', credentials);
      console.log('register response login:', response);
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  console.log('persistedToken:', persistedToken);

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/user')
    .then(({ data }) => {
      console.log('getCurrentUser data:', data);
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch(error => dispatch(authActions.getCurrentUserError(error)));
};

const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());
  axios
    .post('/auth/logout')
    .then(() => {
      console.log('logOut!!!');
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error)));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
