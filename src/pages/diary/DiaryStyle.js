import styled from 'styled-components';
import imageDesktop from '../../assets/images/calculatorPage/desktop.jpg';
import imageTablet from '../../assets/images/calculatorPage/tablet.jpg';

export const DiaryWrapper = styled.div`
  padding-top: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    padding-top: 180px;
    overflow: hidden;
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;
    background-image: url(${imageTablet});
  }
  @media (min-width: 1280px) {
    overflow-y: scroll;
    margin-top: -150px;
    padding-top: 292px;
    padding-bottom: 140px;
    background-image: url(${imageDesktop});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .diaryPage {
    @media screen and (min-width: 1280px) {
      display: flex;
      flex-direction: row;
    }
  }

  .formWrapper {
    @media screen and (min-width: 768px) {
      padding-bottom: 61px;
    }
    @media screen and (min-width: 1280px) {
      width: 1000px;
      margin-right: 120px;
    }
  }
  .buttomDiaryProductList {
    display: block;
    margin: 60px auto;
    width: 50px;
    height: 50px;
    border: 2px solid #fc842d;
    border-radius: 50px;
    background-color: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    color: #ffffff;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: #ffffff;
      color: #fc842d;
      background-image: url(../../img/icons/closeCross.svg);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .calendarSlide-enter {
    transform: scale(0);
  }
  .calendarSlide-enter-active {
    transform: scale(1);
    transition: transform 500ms ease-in-out;
  }
  .calendarSlide-exit {
    transform: scale(1);
  }
  .calendarSlide-exit-active {
    transform: scale(0);
    transition: transform 500ms ease-in-out;
  }
  .titleSlide-appear {
    transform: translateX(-100%);
  }
  .titleSlide-appear-active {
    transform: translateX(0);
    transition: transform 500ms linear;
  }
`;
