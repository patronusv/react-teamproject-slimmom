import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import authOperations from '../../redux/operations/authOperations';
import RegistrationFormWrapper from './RegistrationFormStyled';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const validateSchema = yup.object().shape({
    username: yup
      .string()
      .typeError(' Должно быть строкой ')
      .required('!!! Необходимо заполнить =_='),
    email: yup
      .string()
      .email(' Введите верный email ')
      .required('!!! Необходимо заполнить =_='),
    password: yup
      .string()
      .min(8, 'Пароль должен быть не меньше 8 символов')
      .max(16, 'Пароль должен быть не больше 16 символов')
      .typeError('Должно быть строкой')
      .required('!!! Необходимо заполнить =_= '),
  });

  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  const onHandleSubmit = values => {
    dispatch(authOperations.registerOperation(values));
    // dispatch(authOperations.loginOperation(values));
    setState({ ...initialState });
  };

  return (
    <RegistrationFormWrapper>
      <h2 className="pageTitle">Регистрация</h2>

      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validateSchema}
        onSubmit={values => {
          onHandleSubmit(values);
        }}
      >
        {({ values, isValid, dirty, isSubmitting }) => (
          <Form>
            <div className="form">
              <label className="formLabel">
                <span className="formLabelText">Имя *</span>
                <Field
                  className="formInput"
                  type="text"
                  name="username"
                  value={values.username}
                />
                <ErrorMessage
                  className="error"
                  name="username"
                  component="div"
                />
              </label>

              <label className="formLabel">
                <span className="formLabelText">Логин *</span>
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
              <span className="formBtnText">Регистрация</span>
            </button>
          </Form>
        )}
      </Formik>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;
