import DailyCaloriesFormStyled from './DailyCaloriesFormStyled';

const DailyCaloriesForm = () => {
  return (
    <DailyCaloriesFormStyled>
      <form className="coloriesForm">
        <div className="coloriesFormList">
          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Рост *</span>
            <input
              className="coloriesFormInput"
              type="text"
              //value="name"
              name="height"
            />
          </label>

          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Возраст *</span>
            <input
              className="coloriesFormInput"
              type="text"
              //value="name"
              name="age"
            />
          </label>

          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Текущий вес *</span>
            <input
              className="coloriesFormInput"
              type="text"
              //value="name"
              name="weight"
            />
          </label>

          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Желаемый вес *</span>
            <input
              className="coloriesFormInput"
              type="text"
              //value="name"
              name="desiredWeight"
            />
          </label>

          <label className="coloriesFormListItem">
            <span className="coloriesFormListItemTitle">Группа крови *</span>
            <div className="coloriesFormCheckboxList">
              <label className="coloriesFormCheckboxListItem">
                <input
                  className="coloriesFormCheckbox checked"
                  type="radio"
                  //value="name"
                  name="bloodType"
                />
                <span className="coloriesFormCheckboxVisible"></span>1
              </label>
              <label className="coloriesFormCheckboxListItem">
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  //value="name"
                  name="bloodType"
                />
                <span className="coloriesFormCheckboxVisible"></span>2
              </label>
              <label className="coloriesFormCheckboxListItem">
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  //value="name"
                  name="bloodType"
                />
                <span className="coloriesFormCheckboxVisible"></span>3
              </label>
              <label className="coloriesFormCheckboxListItem">
                <input
                  className="coloriesFormCheckbox"
                  type="radio"
                  //value="name"
                  name="bloodType"
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
