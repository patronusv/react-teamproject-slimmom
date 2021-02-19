import { createReducer } from '@reduxjs/toolkit';
import notificActions from '../actions/notificActions';
// import modalActions from '../actions/modalActions';

const notificationReducer = createReducer(false, {
  [notificActions.showNotification]: () => true,
  [notificActions.hideNotification]: () => false,
});

export default notificationReducer;