import DailyCaloriesForm from '../../components/dailyCaloriesForm/DailyCaloriesForm';
import HomePageStyled from './HomeStyled';

const Home = () => {
  return (
    <HomePageStyled>
      {/* <div className="container"> */}
      <h2 className="homeTitle">
        Просчитай свою суточную норму калорий прямо сейчас
      </h2>
      <DailyCaloriesForm />
      {/* </div> */}
    </HomePageStyled>
  );
};

export default Home;
