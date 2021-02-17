import axios from 'axios';

import {
diarySetLoading, diarySetError, deleteDiaryItem,getUserData
} from '../actions/healthActions';

// export const getDailyInfo=()=>async(dispatch,getState)=>{
//   const id = getState().auth.user.id;

//   try {
//     const response = await axios.post(
//       `https://slimmom-backend.goit.global/daily-rate/602cbdf9b358b53ec8eb2149`,
//       {
//         weight: 100,
//         height: 170,
//         age: 30,
//         desiredWeight: 60,
//         bloodType: 1
//       }
//     );
//     console.log(response.data);
//     dispatch(getUserData(response.data));
//   } catch (error) {
//     dispatch(diarySetError(error));
//   } finally {
//     dispatch(diarySetLoading());
//   }
// }

axios.defaults.baseURL = "https://slimmom-backend.goit.global"

export const deleteDiaryItemOperation = (id) => async(dispatch,getState) =>{
 
    const token = getState().auth.accessToken;
  
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    dispatch(diarySetLoading());

    try {
        const response = await axios.delete('/day',
          {
            dayId: "507f1f77bcf86cd799439011",
            eatenProductId: id
          }
        );
        console.log(response);
        // dispatch(deleteDiaryItem(id));
      } catch (error) {
     
        dispatch(diarySetError(error.message));
      } finally {
        dispatch(diarySetLoading());
      }

}