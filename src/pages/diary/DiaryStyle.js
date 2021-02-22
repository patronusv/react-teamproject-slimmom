import styled from 'styled-components';
import imageDesktop from '../../assets/images/calculatorPage/desktop.jpg';
import imageTablet from '../../assets/images/calculatorPage/tablet.jpg';

export const DiaryWrapper = styled.div`
  /* @media screen and (min-width: 1280px) {
    display: flex;
    margin-top: 143px;
  } */
  padding-top: 40px;
  margin-bottom: 60px;

  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    padding-top: 180px;
    margin-bottom: 61px;
    position: absolute;

    top: 0;
    z-index: -100;
    overflow: hidden;
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;
    background-image: url(${imageTablet});
  }
  @media (min-width: 1280px) {
    padding-top: 292px;
    padding-bottom: 74px;
    background-image: url(${imageDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    /* position: absolute;
    background-size: cover;
    top: 0;
    z-index: -100;
    overflow: hidden; */
  }

  .diaryPage {
    @media screen and (min-width: 1280px) {
      display: flex;
      flex-direction: row;
    }
  }

  .formWrapper {
    //margin-right: 30px;
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
`;
