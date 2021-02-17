import React from 'react';
import { useDispatch} from 'react-redux';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';
import {deleteDiaryItemOperation,getDailyInfo} from '../../redux/operations/diaryOperations';
import {diarySetLoading} from '../../redux/actions/healthActions';
import { UL } from './DiaryProductListStyle'


const DiaryProductList = () => {
  const dispatch = useDispatch();
 

  const handleDelete =(e)=>{
    const prodID = e.target.dataset.id;
    console.log('prodID', prodID);
    // dispatch(getDailyInfo());
    dispatch(deleteDiaryItemOperation(prodID));
  }

  return (
    <UL>
      <DiaryProductItem onClick = {handleDelete}/>
    </UL>
  )
}



export default DiaryProductList;



