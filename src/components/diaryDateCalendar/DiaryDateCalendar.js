import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { DateCalendarWrapper } from './DiaryDateCalendarStyle';
import IconCalendar from './IconCalendar';
import healthOperations from '../../redux/operations/healthOperations';
import healthSelectors from '../../redux/selectors/healthSelectors';

const DiaryDateCalendar = () => {
  const newDate = useSelector(healthSelectors.getDate);
  const [startDate, setStartDate] = useState(new Date(newDate));
  const dispatch = useDispatch();

  const handleChange = day => {
    setStartDate(day);
    const date = { date: moment(day).format('YYYY-MM-DD') };
    dispatch(healthOperations.getDayInfoOperation(date));
    dispatch(healthOperations.setDateOperation(date));
  };

  return (
    <>
      <DateCalendarWrapper>
        <label className="labelDatePicker">
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            dateFormat="d.MM.yyyy"
            className="inputDiaryDateCalendar"
            name="date"
          ></DatePicker>
          <IconCalendar className="iconDateCalendar" />
        </label>
      </DateCalendarWrapper>
    </>
  );
};

export default DiaryDateCalendar;
