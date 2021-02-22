import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 290px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding-bottom: 73.5px;
    min-width: 605px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 115px;
  }

  .homeTitle {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.44;
    color: #212121;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 1.2;
      margin-bottom: 60px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 34px;
      line-height: 1.21;
      margin-bottom: 68px;
    }
  }

  .coloriesForm {
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1280px) {
    }
  }

  .coloriesFormList {
    @media screen and (min-width: 768px) {
      width: 510px;
      height: 186.5px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }

  .coloriesFormListItem {
    position: relative;
    display: flex;
    justify-content: space-between;

    width: 240px;
  }
  .coloriesFormListItem:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }

  .coloriesFormListItem:not(:last-child):hover {
    border-bottom: 1px solid #fc842d;
  }

  .coloriesFormListItem:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin-bottom: 30px;
    }
  }

  .coloriesFormListItem:last-child {
    display: flex;
    flex-direction: column;
  }

  .coloriesFormListItem:not(:nth-child(3n)) {
    @media screen and (min-width: 768px) {
      margin-bottom: 30px;
    }
  }

  .coloriesFormListItem:nth-child(-n + 3) {
    @media screen and (min-width: 768px) {
      margin-right: 30px;
    }
  }

  .coloriesFormListItemTitle {
    white-space: nowrap;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    color: #9b9faa;
    border: none;
    padding-bottom: 10px;

    @media screen and (min-width: 768px) {
      padding-bottom: 19.5px;
    }
    @media screen and (min-width: 1280px) {
    }
  }
  .coloriesFormInput {
    flex-grow: 1;
    max-width: 105px;
    text-align: center;
    font-weight: 400;
    line-height: 1.21;
    //color: #9b9faa;
    color: #212121;
    border: none;
    outline: none;
    //padding-left: 40px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 20px;
    }
  }
  .coloriesFormCheckboxList {
    display: flex;
    align-items: baseline;

    //flex-direction: column;
  }
  //label
  .coloriesFormCheckboxListItem,
  .coloriesFormCheckboxListItemCheked {
    display: flex;
    justify-content: center;
  }

  .coloriesFormCheckboxListItemCheked {
    color: #fc842d;
  }
  .coloriesFormCheckboxListItem:not(:last-child),
  .coloriesFormCheckboxListItemCheked:not(:last-child) {
    padding-right: 25px;
  }
  //input
  .coloriesFormCheckbox {
    /* margin-right: 6px;
    margin-left: 15px; */

    //hidden input
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  //checked
  .coloriesFormCheckbox:checked + .coloriesFormSvg {
    fill: #fc842d;
  }

  .coloriesFormCheckbox:focus + .coloriesFormSvg {
    border: 1px solid #fc842d;
    border-radius: 50%;
  }

  .coloriesFormSvg {
    fill: #9b9faa;
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  /* .coloriesFormSvg:hover {
    fill: #9b9faa;
    width: 20px;
    height: 20px;
    margin-right: 6px;
  } */

  .coloriesFormBtn {
    display: flex;
    background: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border-radius: 30px;
    border: none;
    outline: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    color: #ffffff;
    padding: 13px 48px;

    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-top: 41.5px;
    }

    @media screen and (min-width: 768px) {
      margin-top: 60px;
    }
    @media screen and (min-width: 1280px) {
      margin: 60px 0 0 auto;
    }
  }

  .coloriesFormBtn:hover {
    color: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

    background: #ffffff;
  }

  .coloriesFormBtn:focus {
    @media screen and (min-width: 768px) {
      color: #fc842d;
      box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

      background: #ffffff;
    }
    @media screen and (min-width: 1280px) {
    }
  }
  .coloriesFormError {
    position: absolute;
    top: calc(100% + 0.2em);

    color: #e63946;
    font-size: 13px;
  }
`;

export default Wrapper;
