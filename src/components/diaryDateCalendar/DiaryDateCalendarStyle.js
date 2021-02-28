import styled from 'styled-components';

export const DateCalendarWrapper = styled.div`
  //margin-top: 40px;
  margin-bottom: 31px;
  //padding-left: 15px;
  @media screen and (min-width: 768px) {
    /* margin-top: 100px;
    margin-bottom: 60px; */
    //padding-left: 92px;
  }
  @media screen and (min-width: 1280px) {
    //margin-top:143px;
    //padding-left: 115px;
    margin-bottom: 60px;
  }
  .inputDiaryDateCalendar {
    //margin-top: 40px;
    margin-bottom: 31px;
    width: 138px;

    border-color: transparent;
    font-family: Verdana;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.22;

    color: #212121;
    @media screen and (min-width: 768px) {
      width: 219px;
      margin-right: 21px;
      font-size: 34px;
      line-height: 1.2;
    }
  }

  .labelDatePicker {
    height: 20px;
    display: flex;
    align-items: baseline;
    @media screen and (min-width: 768px) {
      height: 38px;
    }
  }
  .iconDateCalendar {
    height: 20px;
    width: 18px;
  }
`;
