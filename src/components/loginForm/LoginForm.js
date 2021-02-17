import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';

import authOperations from '../../redux/operations/authOperations';
import LoginFormWrapper from './LoginFormStyled';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .email(' Введите верный email ')
      .required(' Обязательно '),
    password: yup
      .string()
      .min(8)
      .typeError('Должно быть строкой')
      .required('Обязательно'),
  });

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

      <Formik
        initialValues={{ ...initialState }}
        validationsSchema={validationsSchema}
        validate={values => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Введите email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          )
            return errors;
        }}
        validateOnBlur
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isValid, dirty, isSubmitting, errors, touched, handleBlur }) => (
          <Form onSubmit={onHandleSubmit}>
            <div className="form">
              <label className="formLabel">
                <span className="formLabelText">Логин *</span>
                <Field
                  className="formInput"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onHandleChange}
                  onBlur={handleBlur}
                />
              </label>

              {/* <ErrorMessage name="email" component="span" /> */}

              {/* {touched.email && errors.email && (
                <p className={'error'}>{errors.email}</p>
              )} */}
              {/* {touched.email && errors.email && errors.email} */}

              <label className="formLabel">
                <span className="formLabelText">Пароль *</span>
                <Field
                  className="formInput"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onHandleChange}
                />
              </label>

              <ErrorMessage name="password" />
              {/* {touched.password && errors.password && errors.password} */}
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
