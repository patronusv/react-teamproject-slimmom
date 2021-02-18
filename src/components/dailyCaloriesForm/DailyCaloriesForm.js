import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { isAuth } from '../../redux/selectors/authSelectors';
import healthOperations from '../../redux/operations/healthOperations';
import Modal from '../modal/Modal';
import sprite from '../../assets/svg/sprite.svg';
import DailyCaloriesFormStyled from './DailyCaloriesFormStyled';

// const initialState = {
//   height: '',
//   age: '',
//   weight: '',
//   desiredWeight: '',
//   bloodType: null,
// };

const schema = Yup.object().shape({
  height: Yup.number()
    .min(
      100,
      'Вам нужно кушать ВСЕ и не считать калории, чтобы подрасти еще до 100 см',
    )
    .max(250, 'Введите значени не больше 250 см')
    .required('Заполните поле "Рост *"'),
  age: Yup.number()
    .min(18, 'Вы слишком молоды, чтобы считать калории, ждем вас в 18 лет')
    .max(100, 'Вам больше 100 лет?! Кушайте ВСЕ и не считайте калории')
    .required('Заполните поле "Возраст *"'),
  weight: Yup.number()
    .min(
      20,
      'Мы можем предложить Вам кирпичи, чтобы Вас не уносило ветром, потому что 20, это слишком мало',
    )
    .max(500, 'Введите значени не больше 500 кг')
    .required('Заполните поле "Текущий вес *"'),
  desiredWeight: Yup.number()
    .min(
      20,
      'Мы можем предложить Вам кирпичи, чтобы Вас не уносило ветром, потому что 20, это слишком мало',
    )
    .max(500, 'Введите значени не больше 500 кг')
    .required('Заполните поле "Желаемый вес *"'),
  bloodType: Yup.number().required('Выбирите Вашу группу крови'),
});

const initialState = {
  height: '',
  age: '',
  weight: '',
  desiredWeight: '',
  bloodType: null,
};

const booldType = {
  type1: ' 1',
  type2: '2',
  type3: '3',
  type4: '4',
};

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const auth = useSelector(isAuth);
  //const auth1 = true;
  const [state, setState] = useState({ ...initialState });
  const [blood, setBlood] = useState({ ...booldType });

  // const onHandleChange = e => {
  //   const { name, value } = e.target;
  //   setState(prev => ({ ...prev, [name]: value }));
  // };

  // const onHandleRadioChange = e => {
  //   setState({ ...state, bloodType: Number(e.target.value) });
  // };

  const onHandlerSubmit = ({
    height,
    age,
    weight,
    desiredWeight,
    bloodType,
  }) => {
    //console.log('values', { height, age, weight, desiredWeight, bloodType });
    dispatch(
      healthOperations.getDailyRateOperation({
        height,
        age,
        weight,
        desiredWeight,
        bloodType: Number(bloodType),
      }),
    );

    !auth && setState({ ...initialState });
    !auth && toggleModal();
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
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
        initialValues={{
          height: '',
          age: '',
          weight: '',
          desiredWeight: '',
          bloodType: null,
        }}
        validationSchema={schema}
        onSubmit={values => {
          onHandlerSubmit(values);
          //console.log('values', values);
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
                />
              </label>
              <ErrorMessage
                className="coloriesFormError"
                component="div"
                name="height"
              />

              <label className="coloriesFormListItem">
                <span className="coloriesFormListItemTitle">Возраст *</span>
                <Field
                  className="coloriesFormInput"
                  type="text"
                  value={values.age}
                  name="age"
                />
              </label>
              <ErrorMessage
                className="coloriesFormError"
                component="div"
                name="age"
              />

              <label className="coloriesFormListItem">
                <span className="coloriesFormListItemTitle">Текущий вес *</span>
                <Field
                  className="coloriesFormInput"
                  type="text"
                  value={values.weight}
                  name="weight"
                />
              </label>
              <ErrorMessage
                className="coloriesFormError"
                component="div"
                name="weight"
              />

              <label className="coloriesFormListItem">
                <span className="coloriesFormListItemTitle">
                  Желаемый вес *
                </span>

                <Field
                  className="coloriesFormInput"
                  type="text"
                  value={values.desiredWeight}
                  name="desiredWeight"
                />
              </label>
              <ErrorMessage
                className="coloriesFormError"
                component="div"
                name="desiredWeight"
              />
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
              </label>
              <ErrorMessage
                className="coloriesFormError"
                component="div"
                name="bloodType"
              />
            </div>
            <button type="submit" className="coloriesFormBtn">
              Похудеть
            </button>
          </Form>
        )}
      </Formik>
      <Modal openModal={openModal} toggleModal={toggleModal} />
    </DailyCaloriesFormStyled>
  );
};

export default DailyCaloriesForm;
