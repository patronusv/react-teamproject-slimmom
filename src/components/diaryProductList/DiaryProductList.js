import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';
import healthOperations from '../../redux/operations/healthOperations';
import healthSelectors from '../../redux/selectors/healthSelectors';
import { UL } from './DiaryProductListStyle'


const DiaryProductList = () => {
  const dispatch = useDispatch();
  const eatenProdArray = useSelector(healthSelectors.getEatenProducts);

  useEffect(() => {
    healthOperations.getDayInfoOperation();
    
  }, [])
 
 
  const handleDelete =(e)=>{
    const prodID = e.target.dataset.id;
    console.log('prodID', prodID);
    dispatch(healthOperations.deleteDiaryItemOperation(prodID));
  }

  return (
    eatenProdArray  ?
    (<UL>
      {eatenProdArray.length >0 ? eatenProdArray.map(item=>
        (<DiaryProductItem onClick = {handleDelete} {...item} key={item.id}/>)) :
        (<h2>Nothing written into the list</h2>)
      }
    </UL>) : (<p>no eaten products</p>)
  )
}



export default DiaryProductList;



