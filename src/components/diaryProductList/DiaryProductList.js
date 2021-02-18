import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';
import healthOperations from '../../redux/operations/healthOperations';
import healthSelectors from '../../redux/selectors/healthSelectors';
import notifSelector from '../../redux/selectors/notificSelectors';
import errorSelector from '../../redux/selectors/errorSelector';
import { UL, MaskWrapper, ListWrapper } from './DiaryProductListStyle';
import Notification from '../notification/Notification';

const DiaryProductList = () => {
  const dispatch = useDispatch();
  const eatenProdArray = useSelector(healthSelectors.getEatenProducts);
  const isNotificShown = useSelector(notifSelector.getNotificState);
  const errorMessage = useSelector(errorSelector.getError);


  const handleDelete = e => {
    const prodID = e.target.dataset.id;
    console.log('prodID', prodID);
    dispatch(healthOperations.deleteDiaryItemOperation(prodID));
  };

  return (
    <div className="container">
      {eatenProdArray ? (
        <ListWrapper>
          {isNotificShown && !errorMessage && <Notification text='Продукт был успешно удален' icon="&#10004;"/>}
          {isNotificShown && errorMessage && <Notification text={`Что-то пошло не так. Ошибка: ${errorMessage}`} icon="&#9940;" error={true}/>}
          


          <UL id="element" length={eatenProdArray.length}>
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
