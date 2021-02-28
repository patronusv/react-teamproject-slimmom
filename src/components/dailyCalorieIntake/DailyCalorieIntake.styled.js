import styled from 'styled-components';

const DailyCalorieIntakeStyle = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 68px;
  }

  .title {
    font-size: 26px;
    line-height: 1.23;
    margin-bottom: 22px;
  }

  @media (max-width: 767px) {
    .dailyCalorieIntake {
      padding-top: 40px;
      padding-bottom: 80px;
      padding-left: 15px;
      padding-right: 15px;
    }

    .title {
      font-size: 18px;
      line-height: 1.44;
      margin-bottom: 40px;
    }
  }

  .title {
    font-weight: 700;
    color: #212121;
    margin-top: 0;
  }

  .ccal {
    font-size: 48px;
    line-height: 1.2;
  }

  .info {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.04em;
    color: #264061;
    margin-top: 0;
    margin-bottom: 30px;
  }

  .mustntEatDiv {
    border-top: 1px solid #e0e0e0;
    padding-top: 12px;
    min-width: 290px;
    max-width: 330px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .mustntEat {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: #212121;
    margin-top: 0;
    margin-bottom: 22px;
  }
  .productList {
    overscroll-behavior: contain;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100px;
    margin-top: 0;
    margin-bottom: 40px;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: #9b9faa;
    list-style-type: decimal;
    list-style-position: inside;
  }

  @media (min-width: 480px) {
    .productList {
      height: 125px;
    }
  }

  .productList > li {
    margin-top: 0;
  }

  .productList > li:not(:last-child) {
    margin-bottom: 10px;
  }

  .btn {
    display: block;
    margin-left: auto;
    margin-right: auto;

    min-width: 176px;
    min-height: 44px;

    padding: 13px 26px;

    background: #fc842d;
    border-radius: 30px;

    border: 2px solid transparent;
    cursor: pointer;

    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    text-align: center;
    letter-spacing: 0.04em;

    color: #ffffff;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn:focus {
    outline: none;
  }

  .btn:focus,
  .btn:hover {
    background-color: #ffffff;
    color: #fc842d;
    border: 2px solid #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }

  .error {
    padding-top: 40px;
    padding-bottom: 40px;

    font-size: 26px;
    font-weight: 700;

    color: #212121;
  }
  .scrollbar {
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
    scrollbar-color: #264061 #f0f1f3;
  }

  .scrollbar::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }
  .scrollbar::-webkit-scrollbar-track {
    background-color: #f0f1f3;
    border-radius: 10px;
  }
  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #264061;
    border-radius: 10px;
    height: 10px;
    width: 10px;
  }
  .scrollbar::-webkit-scrollbar-thumb:vertical {
    min-height: 1.5rem;
  }
  .scrollbar::-webkit-scrollbar-thumb:horizontal {
    min-width: 1.5rem;
  }
`;
export default DailyCalorieIntakeStyle;
