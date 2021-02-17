import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    display: flex;
    width: 240px;
    //border-bottom: 1px solid #e0e0e0;
  }
  .coloriesFormListItem:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }

  .coloriesFormListItem:not(:last-child) {
    @media screen and (max-width: 768px) {
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
    /* text-align: center; */
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    color: #9b9faa;
    border: none;
    outline: none;
    padding-left: 20%;
  }
  .coloriesFormCheckboxList {
    display: flex;
    //flex-direction: column;
  }
  //label
  .coloriesFormCheckboxListItem {
    padding-left: 25px;
  }
  //input
  .coloriesFormCheckbox {
    margin-right: 6px;
    margin-left: 15px;

    //hidden input
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  //span
  .coloriesFormCheckboxVisible {
    position: absolute;
    margin-left: -25px;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='10' fill='white' stroke='%23E0E0E0'/%3E%3C/svg%3E");
  }

  //checked
  .coloriesFormCheckbox:checked + .coloriesFormCheckboxVisible {
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='5' fill='%23FC842D'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }

  .coloriesFormBtn {
    display: flex;
    width: 176px;
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
    margin-top: 40px;

    @media screen and (min-width: 768px) {
      margin-top: 60px;
    }
    @media screen and (min-width: 1280px) {
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
`;

export default Wrapper;
