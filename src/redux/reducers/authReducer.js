import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";



const authReducer = createReducer({
    isAuth:true
},{});


export default authReducer;
