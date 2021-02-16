import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { DateCalendarWrapper } from './DiaryDateCalendarStyle';
import IconCalendar from './IconCalendar';

const DiaryDateCalendar = () => {
  const [state, setState] = useState({
    date: new Date(),
  });

  const [startDate, setStartDate] = useState(new Date());



  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev, [name]: value
    }))
  }

  // const getCurrentDate = () => {
  //   let date = new Date();
  //   let year = date.getFullYear();
  //   let month = date.getMonth().length > 1 ? date.getMonth() + 1 : ('0' + (date.getMonth() + 1));
  //   let day = date.getDate();
  //   let currentDate = `${year}-${month}-${day}`
  //   let currentDateFormat = moment(currentDate).format('DD.MM.YYYY')
  //   console.log(currentDateFormat)
  //   return currentDateFormat
  // }


  return <>
    <DateCalendarWrapper>
      <label className="labelDatePicker">
        <DatePicker selected={startDate} onChange={date => setStartDate(date)}
          dateFormat="d.MM.yyyy" className="inputDiaryDateCalendar">
          <div style={{ color: "red" }}>Don't forget to check the weather!</div>
        </DatePicker>
        <IconCalendar className="iconDateCalendar" />
      </label>
      {/* <input type="date"
        name="date"
        value={state.date = getCurrentDate()}
        onChange={handleChange}
        className='inputDiaryDateCalendar' />
      <svg width="40"
        height="40"
        aria-label="Календарь" className='iconDairyDateCalendar'>
        <use href="../../img/icons/sprite.svg#icon-DataCalendar"></use>
      </svg> */}
    </DateCalendarWrapper>
  </>;
};

export default DiaryDateCalendar;
