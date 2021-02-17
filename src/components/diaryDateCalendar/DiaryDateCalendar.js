import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { DateCalendarWrapper } from './DiaryDateCalendarStyle';
import IconCalendar from './IconCalendar';
import healthOperations from '../../redux/operations/healthOperations'

const DiaryDateCalendar = () => {

  const [state, setState] = useState({ date: '', });
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();



  const handleChange = (day) => {

    setStartDate(day)
    // const dateX = { date: day.format('YYYY-MM-DD') }
    // setState(prev => ({
    //   ...prev, date: moment(day).format('YYYY-MM-DD')
    // }))

    const date = { date: moment(day).format('YYYY-MM-DD') };
    dispatch(healthOperations.getDayInfoOperation(date));
    dispatch(healthOperations.setDateOperation(date))
    console.log('current ==>', day)
    console.log(date)
    // console.log('user ==>', date)
    // console.log(startDate)
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