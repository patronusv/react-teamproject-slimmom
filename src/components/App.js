import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../redux/operations/authOperations';
import Header from './header/Header';
import Main from './main/Main';
import healthOperations from '../redux/operations/healthOperations';
import moment from 'moment';
import RightSideBar from './rightSideBar/RightSideBar';
import modalActions from '../redux/actions/modalActions';
import authActions from '../redux/actions/authActions';
import LoaderSpinner from '../components/loader/Loader';
import isLoading from '../redux/selectors/loaderSelector';
import { useHistory } from 'react-router-dom';
import authSelectors from '../redux/selectors/authSelectors';
import errorSelector from '../redux/selectors/errorSelector';

const App = () => {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const history = useHistory();
  const errorState = useSelector(errorSelector.getError);
  const isAuthenticated = useSelector(authSelectors.isAuth);
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
      date: '2020-02-19',
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
    // dispatch(authOperations.refreshOperation());
    // dispatch(healthOperations.getUserInfoOperation());
    // dispatch(healthOperations.getDailyRateOperation(dailyRateData));
    // dispatch(healthOperations.getDailyRateOperation(dailyRateData, userId));
    // dispatch(healthOperations.getProductOperation('ябл'));
    // dispatch(healthOperations.getDayInfoOperation(date));
    // dispatch(healthOperations.postEatenProductOperation(product));
    // dispatch(modalActions.toggleModal());
  }, []);

  useEffect(() => {
    dispatch(authOperations.refreshOperation()).catch(error => {
      history.push('/login');
    });
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
