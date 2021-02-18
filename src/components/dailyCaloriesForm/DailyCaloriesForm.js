import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from '../../redux/selectors/authSelectors';
import healthOperations from '../../redux/operations/healthOperations';
import Modal from '../modal/Modal';
import sprite from '../../assets/svg/sprite.svg';
import DailyCaloriesFormStyled from './DailyCaloriesFormStyled';
import DailyCalorieIntake from '../dailyCalorieIntake/DailyCalorieIntake';

const initialState = {
  height: '',
  age: '',
  weight: '',
  desiredWeight: '',
  bloodType: null,
};

const booldType = {
  type1: 1,
  type2: 2,
  type3: 3,
  type4: 4,
};

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const auth = useSelector(isAuth);
  //const auth1 = true;
  const [state, setState] = useState({ ...initialState });
  const [blood, setBlood] = useState({ ...booldType });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleRadioChange = e => {
    setState({ ...state, bloodType: Number(e.target.value) });
  };

  const onHandlerSubmit = e => {
    e.preventDefault();
    //console.log('state', state);
    dispatch(healthOperations.getDailyRateOperation(state));
    !auth && setState({ ...initialState });
    //toggleModal();
    !auth && toggleModal();
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  // const colorForType = {
  //   color: ['#fc842d', ' #e0e0e0'],
  // };

  return (
    <DailyCaloriesFormStyled>
      {auth ? (
        <h2 className="homeTitle">Узнай свою суточную норму калорий</h2>
      ) : (
        <h2 className="homeTitle">
          Просчитай свою суточную норму калорий прямо сейчас
        </h2>
      )}
      <form className="coloriesForm" onSubmit={onHandlerSubmit}>
        <div className="coloriesFormList">
          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Рост *</span>
            <input
              className="coloriesFormInput"
              type="text"
              value={state.height}
              name="height"
              onChange={onHandleChange}
            />
          </label>

          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Возраст *</span>
            <input
              className="coloriesFormInput"
              type="text"
              value={state.age}
              name="age"
              onChange={onHandleChange}
            />
          </label>

          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Текущий вес *</span>
            <input
              className="coloriesFormInput"
              type="text"
              value={state.weight}
              name="weight"
              onChange={onHandleChange}
            />
          </label>

          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Желаемый вес *</span>
            <input
              className="coloriesFormInput"
              type="text"
              value={state.desiredWeight}
              name="desiredWeight"
              onChange={onHandleChange}
            />
          </label>

          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Группа крови *</span>
            <div className="coloriesFormCheckboxList">
              <label
                className={
                  blood.type1 === state.bloodType
                    ? 'coloriesFormCheckboxListItemCheked'
                    : 'coloriesFormCheckboxListItem'
                }
              >
                <input
                  className="coloriesFormCheckbox checked"
                  type="radio"
                  value={blood.type1}
                  checked={blood.type1 === state.bloodType}
                  onChange={onHandleRadioChange}
                />
                <svg className="coloriesFormSvg">
                  <use
                    href={
                      blood.type1 === state.bloodType
                        ? sprite + '#button-on'
                        : sprite + '#button-off'
                    }
                  />
                </svg>
                1
              </label>
              <label
                className={
                  blood.type2 === state.bloodType
                    ? 'coloriesFormCheckboxListItemCheked'
                    : 'coloriesFormCheckboxListItem'
                }
              >
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  value={blood.type2}
                  checked={blood.type2 === state.bloodType}
                  onChange={onHandleRadioChange}
                />
                <svg className="coloriesFormSvg">
                  <use
                    href={
                      blood.type2 === state.bloodType
                        ? sprite + '#button-on'
                        : sprite + '#button-off'
                    }
                  />
                </svg>
                2
              </label>
              <label
                className={
                  blood.type3 === state.bloodType
                    ? 'coloriesFormCheckboxListItemCheked'
                    : 'coloriesFormCheckboxListItem'
                }
              >
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  value={blood.type3}
                  checked={blood.type3 === state.bloodType}
                  onChange={onHandleRadioChange}
                />
                <svg className="coloriesFormSvg">
                  <use
                    href={
                      blood.type3 === state.bloodType
                        ? sprite + '#button-on'
                        : sprite + '#button-off'
                    }
                  />
                </svg>
                3
              </label>
              <label
                className={
                  blood.type4 === state.bloodType
                    ? 'coloriesFormCheckboxListItemCheked'
                    : 'coloriesFormCheckboxListItem'
                }
              >
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  value={blood.type4}
                  checked={blood.type4 === state.bloodType}
                  onChange={onHandleRadioChange}
                />
                <svg className="coloriesFormSvg">
                  <use
                    href={
                      blood.type4 === state.bloodType
                        ? sprite + '#button-on'
                        : sprite + '#button-off'
                    }
                  />
                </svg>
                4
              </label>
            </div>
          </label>
        </div>
        <button type="submit" className="coloriesFormBtn">
          Похудеть
        </button>
      </form>
      <Modal openModal={openModal} toggleModal={toggleModal}>
        <DailyCalorieIntake />
      </Modal>
    </DailyCaloriesFormStyled>
  );
};

export default DailyCaloriesForm;
