import { useDispatch, useSelector } from 'react-redux';
import { useWindowWidth } from '@react-hook/window-size';
import RightSideBar from '../../components/rightSideBar/RightSideBar';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import CalculatorStyled from './CalculatorStyled';
import notificSelectors from '../../redux/selectors/notificSelectors';
import Notification from '../../components/notification/Notification';
import { CSSTransition } from 'react-transition-group';
import notificationStyles from '../../components/notification/Alert.module.css';
import authSelectors from '../../redux/selectors/authSelectors';
import { useEffect } from 'react';
import healthOperations from '../../redux/operations/healthOperations';
import healthSelectors from '../../redux/selectors/healthSelectors';

const Calculator = () => {
  const onlyWidth = useWindowWidth();
  const notification = useSelector(notificSelectors.getNotificState);
  const id = useSelector(authSelectors.getId);
  const userData = useSelector(authSelectors.getUserdata);
  const date = useSelector(healthSelectors.getDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !id ||
      !userData.weight ||
      !userData.height ||
      !userData.desiredWeight ||
      !userData.age ||
      !userData.bloodType
    ) {
      return;
    } else {
      dispatch(healthOperations.getDailyRateOperation(userData, id));
      dispatch(healthOperations.getDayInfoOperation({ date }));
    }
  }, [id]);

  return (
    <CalculatorStyled>
      <div className="container">
        <div className="calculatorPage">
          {notification && (
            <div className="alert">
              <CSSTransition
                in={true}
                timeout={250}
                classNames={notificationStyles}
                appear
              >
                <Notification
                  text={'Пожалуйста, заполните форму!'}
                  alert={true}
                  error={false}
                />
              </CSSTransition>
            </div>
          )}

          <DailyCaloriesForm />
          {onlyWidth >= 768 && <RightSideBar />}
        </div>
      </div>
      {onlyWidth < 768 && <RightSideBar />}
    </CalculatorStyled>
  );
};

export default Calculator;
