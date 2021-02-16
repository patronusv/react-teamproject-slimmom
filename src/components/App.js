import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/operations/authOperations';
import Header from './header/Header';
import Main from './main/Main';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loginUser = {
      email: 'gustav@mail.mail',
      password: 'qwerty123',
    };
    const registerUser = {
      email: 'gustav@mail.mail',
      password: 'qwerty123',
      username: 'Gustav Muhozhuk',
    };
    // dispatch(authOperations.registerOperation(registerUser))
    // dispatch(authOperations.loginOperation(loginUser));
    // dispatch(authOperations.logOutOperation());
    // dispatch(authOperations.refreshOperation());
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
