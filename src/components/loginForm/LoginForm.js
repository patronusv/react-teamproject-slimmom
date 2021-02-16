import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/operations/authOperations';

import LoginFormWrapper from './LoginFormStyled';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.loginOperation(state));
    setState({ ...initialState });
  };

  const { email, password } = state;

  return (
    <LoginFormWrapper>
      <h2 className="pageTitle">Вход</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form">
          <label className="formLabel">
            <span className="formLabelText">Логин *</span>
            <input
              className="formInput"
              type="text"
              name="email"
              value={email}
              onChange={onHandleChange}
            />
          </label>
          <label className="formLabel">
            <span className="formLabelText">Пароль *</span>
            <input
              className="formInput"
              type="password"
              name="password"
              value={password}
              onChange={onHandleChange}
            />
          </label>
        </div>

        <button className="formBtn" type="submit">
          <span className="formBtnText">Вход</span>
        </button>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
