import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import healthReducer from './healthReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  // health: healthReducer,
});

export default rootReducer;
