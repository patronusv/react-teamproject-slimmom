import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/operations/authOperations';

import RegistrationFormWrapper from './RegistrationFormStyled';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.registerOperation(state));
    setState({ ...initialState });
  };

  const { username, email, password } = state;

  return (
    <RegistrationFormWrapper>
      <h2 className="pageTitle">Регистрация</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form">
          <label className="formLabel">
            <span className="formLabelText">Имя *</span>
            <input
              className="formInput"
              type="text"
              name="username"
              value={username}
              autoFocus
              onChange={onHandleChange}
            />
          </label>
          <label className="formLabel">
            <span className="formLabelText">Логин *</span>
            <input
              className="formInput"
              type="text"
              name="email"
              value={email}
              autoFocus
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
              autoFocus
              onChange={onHandleChange}
            />
          </label>
        </div>

        <button className="formBtn" type="submit">
          <span className="formBtnText">Регистрация</span>
        </button>
      </form>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;
