import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";

const healthReducer = createReducer({dailyRate: 10},{});

export default healthReducer;
