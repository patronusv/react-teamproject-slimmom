import styled from 'styled-components';
export const DiaryWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    margin-top: 143px;
  }
  .formWrapper {
    margin-right: 30px;
    @media screen and (min-width: 1280px) {
      width: 600px;
    }
  }
  .buttomDiaryProductList {
    display: block;
    margin: 0 auto;
    margin-top: 70px;
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
