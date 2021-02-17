import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateCalendarWrapper } from './DiaryDateCalendarStyle';
import IconCalendar from './IconCalendar';

const DiaryDateCalendar = ({ onChange }) => {


  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date)
    onChange(date)
    console.log(date)
    console.log(startDate)
  }


  return <>
    <DateCalendarWrapper>
      <label className="labelDatePicker">
        <DatePicker selected={startDate} onChange={handleChange}
          dateFormat="d.MM.yyyy" className="inputDiaryDateCalendar" name="date">
          {/* <div style={{ color: "red" }}>Don't forget to check the weather!</div> */}
        </DatePicker>
        <IconCalendar className="iconDateCalendar" />
      </label>

    </DateCalendarWrapper>
  </>;
};

export default DiaryDateCalendar;




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