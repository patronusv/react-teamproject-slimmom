import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import healthActions from '../actions/healthActions';
import authActions from '../actions/authActions';

const initialState = {
  userData: {},
  days: [],
};

const userInfoReducer = createReducer(initialState, {
  [healthActions.getUserInfoSuccess]: (_, { payload }) => ({
    userData: payload.userData,
    days: payload.days,
  }),
  [authActions.logOutSuccess]: () => initialState,
});

const dailyRateReducer = createReducer(
  {},
  {
    [healthActions.getDailyRateSuccess]: (_, { payload }) => payload,
    [authActions.logOutSuccess]: () => {},
  },
);

const productReducer = createReducer([], {
  [healthActions.getProductSuccess]: (_, { payload }) => payload,
  [authActions.logOutSuccess]: () => [],
});

const dayInfoReducer = createReducer(

  {
    error:"", 
    loading:false, 
    },
  {
    [healthActions.getDayInfoSuccess]: (_, { payload }) => payload,
    [healthActions.postEatenProductSuccess]: (state, { payload }) => ({
      ...state,
      eatenProducts: [...state.eatenProducts, payload.eatenProduct],
      daySummary: payload.daySummary,
    }),
    [healthActions.deleteDiaryItemSuccess]: (state,{payload})=>({
        ...state,
        eatenProducts: [...state.eatenProducts.filter(item=>{
            console.log('item.id', item.id);
            console.log('payload', payload);
           return item.id !== payload
        })]
    }),
    [healthActions.deleteDiaryItemRequest]:(state,{payload})=>({
        ...state,
        loading: !state.loading
    }),
    [healthActions.deleteDiaryItemError]:(state,{payload})=>({
        ...state,
        error: payload
    }),
    [authActions.logOutSuccess]: () => {},
  },
);

const healthReducer = combineReducers({
  userInfo: userInfoReducer,
  dailyRate: dailyRateReducer,
  product: productReducer,
  dayInfo: dayInfoReducer,
});

export default healthReducer;


// const healthReducer = createReducer({dailyRate: null, dailyEatenProd:[], error:"",loading:false,userData:{}},{
//     [diarySetLoading]:(state,action)=>{
//         return {...state, loading:!state.loading}
//     },
//     [diarySetError]:(state,action)=>{
//         return {...state, error:action.payload}
//     },
//     [deleteDiaryItem]:(state,action)=>{
//         return {...state, dailyEatenProd:[...state.dailyEatenProd, action.payload]}
//     },
//     [getUserData]:(state,action)=>{
//         return {...state,userData:{...action.payload}}
//     }