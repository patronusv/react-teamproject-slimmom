import { useState,useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import authOperations from '../../redux/operations/authOperations';
import { isAuth } from '../../redux/selectors/authSelectors';

import LoginFormWrapper from './LoginFormStyled';

const initialState = {
  email: '',
  password: '',
};


const LoginForm = () => {
  const dispatch = useDispatch();
  const authFlag = useSelector(state=>state.auth.accessToken);
  const history = useHistory();
  const [state, setState] = useState({ ...initialState });
  

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.loginOperation(state));
    setState({ ...initialState });
    history.push('/calculator');
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
