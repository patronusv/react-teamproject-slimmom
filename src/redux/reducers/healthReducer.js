import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";

const healthReducer = createReducer({dailyRate: null},{});

export default healthReducer;
