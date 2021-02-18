import RightSideBar from "../../components/rightSideBar/RightSideBar"
import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import CalculatorStyled from './CalculatorStyled';

const Calculator = () => {
    return (
        <CalculatorStyled>
            <div className="container">
                <DailyCaloriesForm />
                <RightSideBar />
            </div>
        </CalculatorStyled>
    );
};

export default Calculator;
