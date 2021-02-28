import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import healthReducer from './healthReducer';
import loaderReducer from './loaderReducer';
import modalReducer from './modalReducer';
import notificationReducer from './notificReducer';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  health: healthReducer,
  loading: loaderReducer,
  error: errorReducer,
  modal: modalReducer,
  notification: notificationReducer
});

export default rootReducer;
