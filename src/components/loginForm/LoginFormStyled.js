import styled from 'styled-components';

const LoginFormWrapper = styled.div`
  width: 290px;
  //height: 351px;

  @media screen and (min-width: 768px) {
    width: 382px;
    //height: 310px;
  }
  @media (min-width: 1280px) {
    width: 382px;
    //height: 298px;
  }

  .pageTitle {
    margin-bottom: 60px;
    color: #fc842d;
    font-family: Gotham Pro;
    font-weight: 700;
    font-size: 14px;
    line-height: 0.93;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    @media (max-width: 767px) {
      text-align: center;
    }

    @media (min-width: 1280px) {
      margin-bottom: 70px;
    }
  }

  .error {
    position: absolute;
    top: calc(100% + 0.2em);

    color: #e63946;
    font-size: 1rem;
  }

  .formLabel {
    position: relative;

    display: flex;
    height: 35.5px;
    border-bottom: 1px solid #e0e0e0;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  .formLabelText {
    white-space: nowrap;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }

  .formInput {
    display: block;
    padding-left: 20px;
    width: 240px;
    height: 35.5px;
    flex-grow: 1;
    border: 0;
    background: transparent;
    @media (min-width: 1280px) {
      width: 290px;
    }
  }
  .formInput:focus {
    outline: none;
  }

  .formBtn {
    //margin-bottom: 15px;
    padding: 13px 48px;
    border: 1px solid #fc842d;
    background-color: #fc842d;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    border-radius: 30px;
    width: 176px;
    height: 44px;
    margin-bottom: 15px;

    @media (max-width: 767px) {
      display: block;
      margin: 0 auto;
      margin-top: 60px;
      margin-bottom: 15px;

    }
    @media screen and (min-width: 768px) {
      margin-top: 60px;
    }

   
  }
  .formBtn:hover,
  .formBtn:focus {
    cursor: pointer;
    outline: none;
    background-color: #fff;
    color: #fc842d;
  }

  .formBtnText {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
  }
`;

export default LoginFormWrapper;
