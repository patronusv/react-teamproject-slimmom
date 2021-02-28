import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { isAuth } from '../../redux/selectors/authSelectors';
import authSelectors from '../../redux/selectors/authSelectors';
import healthOperations from '../../redux/operations/healthOperations';
import Modal from '../modal/Modal';
import sprite from '../../assets/svg/sprite.svg';
import DailyCaloriesFormStyled from './DailyCaloriesFormStyled';
import DailyCalorieIntake from '../dailyCalorieIntake/DailyCalorieIntake';
import getModalState from '../../redux/selectors/modalSelector';
import modalActions from '../../redux/actions/modalActions';

const schema = Yup.object().shape({
  height: Yup.number()
    .min(100, 'Min значение 100')
    .max(250, 'Max значение 250')
    .required('Заполните поле "Рост"')
    .typeError('Введите число от 100 до 250'),
  age: Yup.number()
    .min(18, 'Min значение 18')
    .max(100, 'Max значение 100')
    .required('Заполните поле "Возраст"')
    .typeError('Введите число 18 от 100'),
  weight: Yup.number()
    .min(20, 'Min значение 20')
    .max(500, 'Max значение 500')
    .required('Заполните поле "Текущий вес"')
    .typeError('Введите число от 20 до 500'),
  desiredWeight: Yup.number()
    .min(20, 'Min значение 20')
    .max(500, 'Max значение 500')
    .required('Заполните поле "Желаемый вес"')
    .typeError('Введите число от 20 до 500'),
  bloodType: Yup.number().nullable().required('Выберите группу крови'),
});

const initialState = {
  height: '',
  age: '',
  weight: '',
  desiredWeight: '',
  bloodType: null,
};

const booldType = {
  type1: '1',
  type2: '2',
  type3: '3',
  type4: '4',
};

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector(isAuth);
  const id = useSelector(authSelectors.getId);
  const [state, setState] = useState({ ...initialState });
  const [blood, setBlood] = useState({ ...booldType });
  const isModal = useSelector(getModalState);

  const onHandlerSubmit = values => {
    //console.log('valuesON', values);
    !auth
      ? dispatch(healthOperations.getDailyRateOperation(values))
      : dispatch(healthOperations.getDailyRateOperation(values, id));

    !auth && dispatch(modalActions.toggleModal());
  };

  return (
    <DailyCaloriesFormStyled>
      {auth ? (
        <h2 className="homeTitle">Узнай свою суточную норму калорий</h2>
      ) : (
        <h2 className="homeTitle">
          Просчитай свою суточную норму калорий прямо сейчас
        </h2>
      )}
      <Formik
        initialValues={state}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onHandlerSubmit({ ...values, bloodType: Number(values.bloodType) });

          actions.resetForm({ ...state });
        }}
      >
        {({ values }) => (
          <Form className="coloriesForm">
            <div className="coloriesFormList">
              <label className="coloriesFormListItem">
                <span className="coloriesFormListItemTitle">Рост *</span>
                <Field
                  className="coloriesFormInput"
                  type="text"
                  value={values.height}
                  name="height"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="coloriesFormError"
                  component="div"
                  name="height"
                />
              </label>

              <label className="coloriesFormListItem">
                <span className="coloriesFormListItemTitle">Возраст *</span>
                <Field
                  className="coloriesFormInput"
                  type="text"
                  value={values.age}
                  name="age"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="coloriesFormError"
                  component="div"
                  name="age"
                />
              </label>

              <label className="coloriesFormListItem">
                <span className="coloriesFormListItemTitle">Текущий вес *</span>
                <Field
                  className="coloriesFormInput"
                  type="text"
                  value={values.weight}
                  name="weight"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="coloriesFormError"
                  component="div"
                  name="weight"
                />
              </label>

              <label className="coloriesFormListItem">
                <span className="coloriesFormListItemTitle">
                  Желаемый вес *
                </span>

                <Field
                  className="coloriesFormInput"
                  type="text"
                  value={values.desiredWeight}
                  name="desiredWeight"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="coloriesFormError"
                  component="div"
                  name="desiredWeight"
                />
              </label>

              <label className="coloriesFormListItem">
                <span className="coloriesFormListItemTitle">
                  Группа крови *
                </span>
                <div className="coloriesFormCheckboxList">
                  <label
                    htmlFor="radio1"
                    className={
                      blood.type1 === values.bloodType
                        ? 'coloriesFormCheckboxListItemCheked'
                        : 'coloriesFormCheckboxListItem'
                    }
                  >
                    <Field
                      className="coloriesFormCheckbox checked"
                      id="radio1"
                      name="bloodType"
                      type="radio"
                      value={blood.type1}
                      checked={blood.type1 === values.bloodType}
                    />
                    <svg className="coloriesFormSvg">
                      <use
                        href={
                          blood.type1 === values.bloodType
                            ? sprite + '#button-on'
                            : sprite + '#button-off'
                        }
                      />
                    </svg>
                    1
                  </label>
                  <label
                    htmlFor="radio2"
                    className={
                      blood.type2 === values.bloodType
                        ? 'coloriesFormCheckboxListItemCheked'
                        : 'coloriesFormCheckboxListItem'
                    }
                  >
                    <Field
                      className="coloriesFormCheckbox"
                      id="radio2"
                      name="bloodType"
                      type="radio"
                      value={blood.type2}
                      checked={blood.type2 === values.bloodType}
                    />
                    <svg className="coloriesFormSvg">
                      <use
                        href={
                          blood.type2 === values.bloodType
                            ? sprite + '#button-on'
                            : sprite + '#button-off'
                        }
                      />
                    </svg>
                    2
                  </label>
                  <label
                    htmlFor="radio3"
                    className={
                      blood.type3 === values.bloodType
                        ? 'coloriesFormCheckboxListItemCheked'
                        : 'coloriesFormCheckboxListItem'
                    }
                  >
                    <Field
                      className="coloriesFormCheckbox"
                      id="radio3"
                      name="bloodType"
                      type="radio"
                      value={blood.type3}
                      checked={blood.type3 === values.bloodType}
                    />
                    <svg className="coloriesFormSvg">
                      <use
                        href={
                          blood.type3 === values.bloodType
                            ? sprite + '#button-on'
                            : sprite + '#button-off'
                        }
                      />
                    </svg>
                    3
                  </label>
                  <label
                    htmlFor="radio4"
                    className={
                      blood.type4 === values.bloodType
                        ? 'coloriesFormCheckboxListItemCheked'
                        : 'coloriesFormCheckboxListItem'
                    }
                  >
                    <Field
                      className="coloriesFormCheckbox"
                      id="radio4"
                      name="bloodType"
                      type="radio"
                      value={blood.type4}
                      checked={blood.type4 === values.bloodType}
                    />
                    <svg className="coloriesFormSvg">
                      <use
                        href={
                          blood.type4 === values.bloodType
                            ? sprite + '#button-on'
                            : sprite + '#button-off'
                        }
                      />
                    </svg>
                    4
                  </label>
                </div>
                <ErrorMessage
                  className="coloriesFormError"
                  component="div"
                  name="bloodType"
                />
              </label>
            </div>
            <button type="submit" className="coloriesFormBtn">
              Похудеть
            </button>
          </Form>
        )}
      </Formik>
      {isModal && (
        <Modal>
          <DailyCalorieIntake />
        </Modal>
      )}
    </DailyCaloriesFormStyled>
  );
};

export default DailyCaloriesForm;
