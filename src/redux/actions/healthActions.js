import { createAction } from "@reduxjs/toolkit";

export const diarySetLoading = createAction("DIARY_SET_LOADING");
export const diarySetError = createAction("DIARY_SET_ERROR");
export const deleteDiaryItem = createAction("DELETE_DIARY_ITEM");
export const getUserData = createAction("GET_USER_DATA");




