import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../redux/operations/authOperations';
import Header from './header/Header';
import Main from './main/Main';
import healthOperations from '../redux/operations/healthOperations';
import moment from 'moment';
import RightSideBar from './rightSideBar/RightSideBar';
import modalActions from '../redux/actions/modalActions';
import LoaderSpinner from '../components/loader/Loader';
import isLoading from '../redux/selectors/loaderSelector';

const App = () => {
  const loading = useSelector(isLoading);
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
    const dateNow = moment(Date.now()).format('YYYY-MM-DD');
    const date = {
      // date: dateNow,
      date: '2020-02-15',
    };
    const userId = '602a3cebb358b53ec8eb1eaa';
    const product = {
      date: '2021-02-15',
      productId: '5d51694802b2373622ff552c',
      weight: 100,
    };
    // dispatch(authOperations.registerOperation(registerUser))
    // dispatch(authOperations.loginOperation(loginUser));
    // dispatch(authOperations.logOutOperation());
    dispatch(authOperations.refreshOperation());
    // dispatch(healthOperations.getUserInfoOperation());
    // dispatch(healthOperations.getDailyRateOperation(dailyRateData));
    dispatch(healthOperations.getDailyRateOperation(dailyRateData, userId));
    // dispatch(healthOperations.getProductOperation('ябл'));
    dispatch(healthOperations.getDayInfoOperation(date));
    // dispatch(healthOperations.postEatenProductOperation(product));
    // dispatch(modalActions.toggleModal());
  }, []);

  return (
    <>
      <Header />
      {loading && <LoaderSpinner />}
      <Main />
    </>
  );
};

export default App;
