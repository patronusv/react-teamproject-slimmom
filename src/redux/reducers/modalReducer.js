import { createReducer } from '@reduxjs/toolkit';
import modalActions from '../actions/modalActions';

const modalReducer = createReducer(false, {
  [modalActions.toggleModal]: state => !state,
  [modalActions.onModal]: () => true,
  [modalActions.offModal]: () => false,
});

export default modalReducer;
