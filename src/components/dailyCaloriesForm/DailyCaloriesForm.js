import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from '../../redux/selectors/authSelectors';
import { addDailyCaloriesFormOperation } from '../../redux/operations/healthOperations';
import DailyCaloriesFormStyled from './DailyCaloriesFormStyled';
import Modal from '../modal/Modal';

const initialState = {
  height: '',
  age: '',
  weight: '',
  desiredWeight: '',
  bloodType: '',
};

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const auth = useSelector(isAuth);
  //const auth1 = true;
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandlerSubmit = e => {
    e.preventDefault();
    console.log('state', state);

    dispatch(addDailyCaloriesFormOperation(state));
    !auth && setState({ ...initialState });
    toggleModal();
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
              <label className="coloriesFormCheckboxListItem">
                <input
                  className="coloriesFormCheckbox checked"
                  type="radio"
                  checked="true"
                  value="1"
                  name="bloodType"
                  data="1"
                  onChange={onHandleChange}
                />
                <span className="coloriesFormCheckboxVisible"></span>1
              </label>
              <label className="coloriesFormCheckboxListItem">
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  value="2"
                  name="bloodType"
                  data="2"
                  onChange={onHandleChange}
                />
                <span className="coloriesFormCheckboxVisible"></span>2
              </label>
              <label className="coloriesFormCheckboxListItem">
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  value="3"
                  name="bloodType"
                  onChange={onHandleChange}
                />
                <span className="coloriesFormCheckboxVisible"></span>3
              </label>
              <label className="coloriesFormCheckboxListItem">
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  value="4"
                  name="bloodType"
                  onChange={onHandleChange}
                />
                <span className="coloriesFormCheckboxVisible"></span>4
              </label>
            </div>
          </label>
        </div>
        <button type="submit" className="coloriesFormBtn">
          Похудеть
        </button>
      </form>
      <Modal openModal={openModal} toggleModal={toggleModal} />
    </DailyCaloriesFormStyled>
  );
};

export default DailyCaloriesForm;
