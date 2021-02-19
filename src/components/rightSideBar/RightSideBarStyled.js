import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 40px 15px 24px 10px;

  @media screen and (min-width: 768px) {
    padding: 90px 120px 90px 87px;
  }
  @media screen and (max-width: 1279px) {
    background-color: #f0f1f3;
  }

  .title {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.214;
    letter-spacing: 0.04em;
    color: #212121;
  }

  .list {
    width: 290px;
  }

  .listItemText {
    font-weight: 400;
    font-size: 14px;
    line-height: 2.142;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }

  .listItemTextRight {
    float: right;
  }

  .blockRight {
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    .rightSideBar {
      display: flex;
      justify-content: space-space-between;
      align-items: baseline;
    }
    .blockLeft {
      margin-right: 60px;
    }
  }

  @media screen and (min-width: 1280px) {
    .rightSideBar {
      flex-direction: column;
      margin-left: 50px;
    }
    .blockRight {
      margin-top: 60px;
    }
  }

  .scrollbar {
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
    scrollbar-color: #264061;
  }
  .scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar::-webkit-scrollbar-track {
    background-color: #afb1b6;
  }
  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #264061;
  }

  .scrollbarText {
    max-height: 150px;
    z-index: 1;
    position: relative;
    overscroll-behavior: contain;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 2px;
  }
`;

export default Wrapper;
