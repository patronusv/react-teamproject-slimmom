import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';
import healthOperations from '../../redux/operations/healthOperations';
import healthSelectors from '../../redux/selectors/healthSelectors';
import { UL, MaskWrapper, ListWrapper } from './DiaryProductListStyle';

const DiaryProductList = () => {
  const dispatch = useDispatch();
  const eatenProdArray = useSelector(healthSelectors.getEatenProducts);

  const handleDelete = e => {
    const prodID = e.target.dataset.id;
    console.log('prodID', prodID);
    dispatch(healthOperations.deleteDiaryItemOperation(prodID));
  };

  return (
    <div className="container">
      {eatenProdArray ? (
        <ListWrapper>
          <UL id="element">
            {eatenProdArray.length > 0 ? (
              eatenProdArray.map(item => (
                <DiaryProductItem
                  onClick={handleDelete}
                  {...item}
                  key={item.id}
                />
              ))
            ) : (
              <h2>Ваш список продуктов пуст</h2>
            )}
          </UL>
          <MaskWrapper></MaskWrapper>
        </ListWrapper>
      ) : (
        <p>Пожалуйста, получите информацию по текущему дню</p>
      )}
    </div>
  );
};

export default DiaryProductList;
