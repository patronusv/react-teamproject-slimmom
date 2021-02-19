import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import healthSelectors from '../../redux/selectors/healthSelectors';
import styles from './DailyCalorieIntake.module.css';
import modalActions from '../../redux/actions/modalActions';

const DailyCalorieIntake = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const notAllowedProducts = useSelector(healthSelectors.getNotAllowedProducts);
  const DailyRate = useSelector(healthSelectors.getDailyRate);


  const filtredProducts = notAllowedProducts?.filter(
    (product, index) => index < 5,
  );

  const modalHandler = () => dispatch(modalActions.toggleModal());
  const btnSubmit = () => {
    modalHandler();
    history.push(!token && '/register');
  };
  return (
    <>
      <div className={styles.dailyCalorieIntake}>
        <h1 className={styles.title}>
          Ваша рекомендуемая суточная норма калорий составляет
        </h1>
        <p className={styles.info}>

          <span className={styles.ccal}>{DailyRate}</span> ккал

        </p>
        <div className={styles.mustntEatDiv}>
          <h2 className={styles.mustntEat}>
            Продукты, которые вам <br /> не рекомендуется употреблять
          </h2>
          <ol className={styles.list}>
            {filtredProducts?.map(product => (
              <li key={product}>{product}</li>
            ))}
          </ol>
        </div>
        <button type="button" className={styles.btn} onClick={btnSubmit}>
          Начать худеть
        </button>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
