import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 290px;
  margin: 0px auto;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    width: 605px;
    height: 420px;
    margin-top: 100px;
    margin-bottom: 423px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    height: 447px;
    margin: 0px 0px;
    margin-top: 137px;
    margin-left: 115px;
    margin-right: 365px;
    margin-bottom: 81px;
    /* height: 447px;
    margin-top: 137px;
    margin-right: 365px;
    margin-bottom: 81px; */
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
`;

export default Wrapper;
