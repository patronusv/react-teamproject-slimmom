import imageDesktop from '../../assets/images/calculatorPage/desktop.jpg';
import imageTablet from '../../assets/images/calculatorPage/tablet.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 60px;

  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    padding-top: 180px;
    margin-bottom: 73px;
    position: absolute;
    background-size: cover;
    top: 0;
    z-index: -100;
    width: 100vw;
    overflow: hidden;
    background-size: contain;
    background-position: center;
    background-repeat: repeat;
    background-image: url(${imageTablet});
  }
  @media (min-width: 1280px) {
    padding-top: 292px;
    padding-bottom: 111px;
    background-image: url(${imageDesktop});
    background-repeat: no-repeat;
    /* position: absolute;
    background-size: cover;
    top: 0;
    z-index: -100;
    width: 100vw;
    overflow: hidden; */
  }

  .calculatorPage {
    display: flex;
    flex-direction: column;
    @media (min-width: 1280px) {
      flex-direction: row;
    }
  }

  .alert {
    position: absolute;
    top: 125px;
    left: auto;
    width: max-content;

    @media (min-width: 1280px) {
      top: 168px;
    }
  }
`;

export default Wrapper;
