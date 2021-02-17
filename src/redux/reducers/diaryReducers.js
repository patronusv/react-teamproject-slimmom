import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import {diarySetLoading, diarySetError, deleteDiaryItem,getUserData} from '../actions/healthActions';

const diaryReducer = createReducer({dailyRate: null, dailyEatenProd:[], error:"",loading:false,userData:{}},{
    [diarySetLoading]:(state,action)=>{
        return {...state, loading:!state.loading}
    },
    [diarySetError]:(state,action)=>{
        return {...state, error:action.payload}
    },
    [deleteDiaryItem]:(state,action)=>{
        return {...state, dailyEatenProd:[...state.dailyEatenProd, action.payload]}
    },
    [getUserData]:(state,action)=>{
        return {...state,userData:{...action.payload}}
    }
});

export default diaryReducer;
