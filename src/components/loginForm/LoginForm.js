import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import authOperations from '../../redux/operations/authOperations';
import { isAuth } from '../../redux/selectors/authSelectors';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import LoginFormWrapper from './LoginFormStyled';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email(' Введите верный E-mail ')
      .required('!!! Введите E-mail =_='),
    password: yup
      .string()
      .min(8, 'Пароль не меньше 8 символов')
      .max(16, 'Пароль не больше 16 символов')
      .typeError('Должно быть строкой')
      .required('!!! Введите Пароль =_= '),
  });

  const dispatch = useDispatch();

  const history = useHistory();
  const [state, setState] = useState({ ...initialState });

  const onHandleSubmit = values => {
    dispatch(authOperations.loginOperation(values));
    setState({ ...initialState });
    history.push('/calculator');
  };

  return (
    <LoginFormWrapper>
      <h2 className="pageTitle">Вход</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validateSchema}
        onSubmit={values => {
          onHandleSubmit(values);
        }}
      >
        {({ values, isValid, dirty, isSubmitting }) => (
          <Form>
            <div className="form">
              <label className="formLabel">
                <span className="formLabelText">E-mail *</span>
                <Field
                  className="formInput"
                  type="email"
                  name="email"
                  value={values.email}
                />
                <ErrorMessage className="error" name="email" component="div" />
              </label>

              <label className="formLabel">
                <span className="formLabelText">Пароль *</span>
                <Field
                  className="formInput"
                  type="password"
                  name="password"
                  value={values.password}
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                />
              </label>
            </div>

            <button
              className="formBtn"
              type="submit"
              disabled={!isValid && !dirty && isSubmitting}
            >
              <span className="formBtnText">Вход</span>
            </button>
          </Form>
        )}
      </Formik>
    </LoginFormWrapper>
  );
};

export default LoginForm;
