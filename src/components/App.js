import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/operations/authOperations';
import Header from './header/Header';
import Main from './main/Main';
import Diary from '../pages/diary/Diary';
import healthOperations from '../redux/operations/healthOperations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loginUser = {
      email: 'user@mail.mail',
      password: 'qwerty123',
    };
    const registerUser = {
      email: 'gustav@mail.mail',
      password: 'qwerty123',
      username: 'Gustav Muhozhuk',
    };
    const dailyRateData = {
      weight: 100,
      height: 170,
      age: 30,
      desiredWeight: 60,
      bloodType: 1,
    };
    const userId = '602a3cebb358b53ec8eb1eaa';
    // dispatch(authOperations.registerOperation(registerUser))
    // dispatch(authOperations.loginOperation(loginUser));
    // dispatch(authOperations.logOutOperation());
    // dispatch(authOperations.refreshOperation());
    // dispatch(healthOperations.getUserInfoOperation());
    // dispatch(healthOperations.getDailyRateOperation(dailyRateData));
    // dispatch(healthOperations.getDailyRateOperation(dailyRateData, userId));
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Diary />
    </>
  );
};

export default App;
