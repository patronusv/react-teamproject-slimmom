import RightSideBar from '../../components/rightSideBar/RightSideBar';
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import CalculatorStyled from './CalculatorStyled';

const Calculator = () => {
  return (
    <CalculatorStyled>
      <div className="container">
        <div className="calculatorPage">
          <DailyCaloriesForm />
          <RightSideBar />
        </div>
      </div>
    </CalculatorStyled>
  );
};

export default Calculator;
