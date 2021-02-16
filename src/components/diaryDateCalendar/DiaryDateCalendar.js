import React, { useState } from 'react';
import { DateCalendarWrapper } from './DiaryDateCalendarStyle';
// import svg from '../../img/icons/sprite.svg'

const DiaryDateCalendar = () => {
  const [state, setState] = useState({
    date: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev, [name]: value
    }))
  }

  const getCurrentDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth().length > 1 ? date.getMonth() + 1 : ('0' + (date.getMonth() + 1));
    let day = date.getDate();
    let currentDate = `${year}-${month}-${day}`
    console.log(currentDate)
    console.log(window.screen.width)
    return currentDate
  }


  return <>
    <DateCalendarWrapper>
      <input type="date"
        name="date"
        value={state.date = getCurrentDate()}
        onChange={handleChange}
        className='inputDiaryDateCalendar' />
      <svg width="40"
        height="40"
        aria-label="Календарь" className='iconDairyDateCalendar'>
        <use href="../../img/icons/sprite.svg#icon-DataCalendar"></use>
      </svg>
    </DateCalendarWrapper>
  </>;
};

export default DiaryDateCalendar;
