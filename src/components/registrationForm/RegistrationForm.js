import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import authOperations from '../../redux/operations/authOperations';
import RegistrationFormWrapper from './RegistrationFormStyled';

import errorSelectors from '../../redux/selectors/errorSelector';
import notifSelectors from '../../redux/selectors/notificSelectors';
import Notification from '../notification/Notification';

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
      .required('!!! Введите ваше Имя =_='),
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
  const notification = useSelector(notifSelectors.getNotificState);
  const error = useSelector(errorSelectors.getError);


  const onHandleSubmit = async values => {
    await dispatch(authOperations.registerOperation(values));
    setState({ ...initialState });
  };

  return (
    <RegistrationFormWrapper>
      <h2 className="pageTitle">Регистрация</h2>

      {notification && error && <Notification text={error} alert={true}/>}
      {notification  && !error && <Notification text="Вы успешно зарегистрированы" alert={true}/>}

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

            {!notification && <button
              className="formBtn"
              type="submit"
              disabled={!isValid && !dirty && isSubmitting}
            >
              <span className="formBtnText">Регистрация</span>
            </button>}
          </Form>
        )}

      </Formik>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;
