import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import HomePageStyled from './HomeStyled';

const Home = () => {
  return (
    <HomePageStyled>
      <div className="container">
        <DailyCaloriesForm />
      </div>
    </HomePageStyled>
  );
};

export default Home;
