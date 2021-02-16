import { useState } from 'react';
import RegistrationFormWrapper from './RegistrationFormStyled';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    setState({ ...initialState });
  };

  const { name, email, password } = state;

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
              name="name"
              value={name}
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
