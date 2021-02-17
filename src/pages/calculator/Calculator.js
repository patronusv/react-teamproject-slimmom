import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import CalculatorStyled from './CalculatorStyled';

const Calculator = () => {
  return (
    <CalculatorStyled>
      <div className="container">
        <DailyCaloriesForm />
      </div>
    </CalculatorStyled>
  );
};

export default Calculator;
