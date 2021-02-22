import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import healthSelectors from '../../redux/selectors/healthSelectors';
import modalActions from '../../redux/actions/modalActions';
import DailyCalorieIntakeStyle from './DailyCalorieIntake.styled';

const DailyCalorieIntake = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const notAllowedProducts = useSelector(healthSelectors.getNotAllowedProducts);
  const DailyRate = useSelector(healthSelectors.getDailyRate);

  const filtredProducts = notAllowedProducts?.filter(
    (product, index) => index < 50,
  );

  const modalHandler = () => dispatch(modalActions.toggleModal());
  const btnSubmit = () => {
    modalHandler();
    history.push(!token && '/register');
  };
  return (
    <>
      <DailyCalorieIntakeStyle>
        <h2 className="title">
          Ваша рекомендуемая суточная норма калорий составляет
        </h2>
        <p className="info">
          <span className="ccal">{DailyRate}</span> ккал
        </p>
        <div className="mustntEatDiv scrollbar">
          <h2 className="mustntEat">
            Продукты, которые вам <br /> не рекомендуется употреблять
          </h2>
          <ul className="productList scrollbar">
            {filtredProducts?.map(product => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>
        <button type="button" className="btn" onClick={btnSubmit}>
          Начать худеть
        </button>
      </DailyCalorieIntakeStyle>
      {/* </div> */}
    </>
  );
};

export default DailyCalorieIntake;
