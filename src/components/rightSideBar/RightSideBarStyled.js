import styled from 'styled-components';

const Wrapper = styled.div`

  background-color: rgba(240, 241, 243, 1);
    // background-color: unset;
    
  width: 100%;
  padding: 40px 5px 85px;


@media screen and (min-width: 768px) {
    // background: url('./img/tab.png') rgba(240, 241, 243, 1) bottom right
    //   no-repeat;
    background-color: unset;
    
    padding: 90px 0;
    height: 100%;
  }

@media screen and (min-width: 1280px) {
    width: 635px;
    padding-top: 10px;
    // padding-left: 50px;
    // padding-right: 30px;
    // padding-left: 90px;
    // padding-right: 115px;
    // background: rgba(240, 241, 243, 1);
    background-color: unset;
    // background: url('./img/desk.png') rgba(240, 241, 243, 1) bottom right
    //   no-repeat;
  }

// .rightSideBar {
//   width: 100%;
// }

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
    //   width: 320px;
    
    display: flex;
    justify-content: center;
     flex-wrap: wrap;
     align-items: baseline;
    //   flex-direction: column;
  }

//   .rightSideBar {
//     display: flex;
//     justify-content: space-around;
//     align-items: baseline;
//     padding-bottom: 0;
//   }

  .blockRight {
    margin-top: 40;
  }
}

@media screen and (min-width: 768px) {
  .rightSideBar {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding-bottom: 0;
    flex-direction: row;
    min-width: 642px;
  }

  .blockLeft {
    // width: 270px;
    margin-right: 60px;
  }

  .blockRight {
    // width: 270px;
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
    flex-direction: column;
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