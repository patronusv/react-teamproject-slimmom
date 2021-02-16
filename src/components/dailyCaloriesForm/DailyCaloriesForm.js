import React, { useState } from 'react';
import DailyCaloriesFormStyled from './DailyCaloriesFormStyled';

const initialState = {
  height: '',
  age: '',
  weight: '',
  desiredWeight: '',
  bloodType: '',
};

const DailyCaloriesForm = () => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;

    setState(prev => ({ ...prev, [name]: value }));
    console.log('name', e.target.name);
    console.log('value', e.target.value);
  };

  return (
    <DailyCaloriesFormStyled>
      <form className="coloriesForm">
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
    </DailyCaloriesFormStyled>
  );
};

export default DailyCaloriesForm;
