import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';
import healthOperations from '../../redux/operations/healthOperations';
import healthSelectors from '../../redux/selectors/healthSelectors';
import { UL } from './DiaryProductListStyle'


const DiaryProductList = () => {
  const dispatch = useDispatch();
  const eatenProdArray = useSelector(healthSelectors.getEatenProducts);
 
 
  const handleDelete =(e)=>{
    const prodID = e.target.dataset.id;
    dispatch(healthOperations.deleteDiaryItemOperation('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'));
  }

  return (
    eatenProdArray  ?
    (<UL>
      {eatenProdArray.length >0 ? eatenProdArray.map(item=>
        (<DiaryProductItem onClick = {handleDelete} {...item} key={item.title+item.id}/>)) :
        (<h2>Nothing written into the list</h2>)
      }
    </UL>) : (<p>no eaten products</p>)
  )
}



export default DiaryProductList;



