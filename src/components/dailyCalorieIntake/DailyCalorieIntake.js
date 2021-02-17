import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { getNotAllowedProducts } from '../../redux/selectors/healthSelectors';
import styles from './DailyCalorieIntake.module.css';

const DailyCalorieIntake = () => {
  const history = useHistory();
  const token = useSelector(state => state.token);
  // const products = useSelector(state => getNotAllowedProducts(state));
  // console.log(products);
  // const filtredProducts = products.filter((product, index) => index < 5);

  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => setIsModal(false);
  const btnSubmit = () => {
    modalHandler();
    history.push(token ? '/diary' : '/registration');
  };
  return (
    <>
      <div className={styles.dailyCalorieIntake}>
        <h1 className={styles.title}>
          Ваша рекомендуемая суточная норма калорий составляет
        </h1>
        <p className={styles.info}>
          <span className={styles.ccal}>111</span> ккал
        </p>
        <div className={styles.mustntEatDiv}>
          <h2 className={styles.mustntEat}>
            Продукты, которые вам <br /> не рекомендуется употреблять
          </h2>
          <p>
            кушать нельзя <br />
            сoррян можно ТОЛЬКО воду пить
          </p>
          {/* <ol className={styles.list}>
            {filtredProducts.map(product => (
              <li key={product}>{product}</li>
            ))}
          </ol> */}
        </div>
        <button type="button" className={styles.btn} onClick={btnSubmit}>
          Начать худеть
        </button>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
