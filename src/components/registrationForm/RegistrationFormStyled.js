import styled from 'styled-components';

const RegistrationFormWrapper = styled.div`
  width: 290px;
  height: 427.5px;

  @media screen and (min-width: 768px) {
    width: 382px;
    height: 324px;
  }
  @media (min-width: 1280px) {
    width: 382px;
    height: 363px;
  }

  .success-msg {
    color: #1d3557;
    background: #8fffab;
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .error {
    color: #e63946;
    font-size: 1rem;
    margin-top: 0.3rem;
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
    @media (min-width: 768px) {
      margin-bottom: 40px;
    }
    @media (min-width: 1280px) {
      margin-bottom: 60px;
    }
  }

  .formLabel {
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
    flex-grow: 1;
    border: 0;
    background: transparent;
  }
  .formInput:focus {
    outline: none;
  }

  .formBtn {
    display: block;
    margin-top: 60px;
    margin-bottom: 10px;
    padding: 5px 15px;
    border: 1px solid #fc842d;
    background-color: #fff;
    color: #fc842d;
    border-radius: 30px;
    width: 176px;
    height: 44px;

    @media (max-width: 767px) {
      display: block;
      margin: 0 auto;
      margin-top: 60px;
    }
  }
  .formBtn:hover,
  .formBtn:focus {
    cursor: pointer;
    outline: none;
    background-color: #fc842d;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }
  @media screen and (min-width: 768px) {
    .formBtn {
      margin-top: 40px;
    }
  }
  @media (min-width: 1280px) {
    .formBtn {
      margin-top: 60px;
    }
  }

  .formBtnText {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
  }
`;

export default RegistrationFormWrapper;
