import styled from 'styled-components';

const Wrapper = styled.div`

  background-color: rgba(240, 241, 243, 1);
  width: 100%;
  padding: 40px 0 85px;

@media screen and (min-width: 768px) {
    background: url('./img/tab.png') rgba(240, 241, 243, 1) bottom right
      no-repeat;
    padding: 90px 0;
    height: 100%;
  }

@media screen and (min-width: 1280px) {
    width: 535px;
    padding-top: 292px;
    padding-left: 90px;
    padding-right: 115px;
    background: url('./img/desk.png') rgba(240, 241, 243, 1) bottom right
      no-repeat;
  }

.rightSideBar {
  width: 100%;
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #212121;
  margin: 0;
  padding-bottom: 20px;
}

.list {
  list-style: none;
  width: 290px;
  margin: 0;
  padding: 0;
}

.listItemText {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 2.142;
  letter-spacing: 0.04em;
  color: #9B9FAA;
  margin: 0;
}

.listItemTextRight {
  float: right;
}

.blockRight {
  margin-top: 20px;
}

@media screen and (min-width: 320px) {
  .rightSideBar {
    display: flex;
    justify-content: center;
     flex-wrap: wrap;
  }

//   .blockRight {
//     margin-top: 40;
//   }
}

@media screen and (min-width: 768px) {
  .rightSideBar {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding-bottom: 0;
  }

//   .bgImageLogin {
//     width: 100%;
//     height: 100%;
//   }

  .blockLeft {
    width: 290px;
  }

  .blockRight {
    width: 270px;
    margin-top: 0;
  }
}

@media screen and (min-width: 1280px) {
  .rightSideBar {
    /* width: 330px; */
    /* padding-top: 292px; */
    justify-content: space-between;
    flex-wrap: wrap;
    /* padding-left: 90px;
        padding-right: 115px; 
    /* padding-bottom: 85px; */
  }
  .blockRight {
    margin-top: 60px;
  }
}



`;

export default Wrapper;