import { useSelector } from 'react-redux';
import RightSideBar from '../../components/rightSideBar/RightSideBar';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import CalculatorStyled from './CalculatorStyled';
import notificSelectors from '../../redux/selectors/notificSelectors';
import Notification from '../../components/notification/Notification';
import { CSSTransition } from 'react-transition-group';
import notificationStyles from '../../components/notification/Alert.module.css';

const Calculator = () => {
  const notification = useSelector(notificSelectors.getNotificState);
  return (
    <CalculatorStyled>

      
      <div className="calculatorPage">
       <div className="container">
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
        </div>

        <div className="RightSideBar">
          <RightSideBar />
        </div>
      </div>
    </CalculatorStyled>
  );
};

export default Calculator;
