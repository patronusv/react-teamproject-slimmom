import RightSideBar from '../../components/rightSideBar/RightSideBar';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import CalculatorStyled from './CalculatorStyled';

const Calculator = () => {
  return (
    <CalculatorStyled>
      <div className="calculatorPage">
        <div className="container">
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
