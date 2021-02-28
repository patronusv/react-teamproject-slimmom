import imageDesktop from '../../assets/images/calculatorPage/desktop.jpg';
import imageTablet from '../../assets/images/calculatorPage/tablet.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    padding-top: 180px;
    overflow: hidden;
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;
    background-image: url(${imageTablet});
  }
  @media (min-width: 1280px) {
    overflow-y: scroll;
    margin-top: -150px;
    padding-top: 292px;
    padding-bottom: 111px;
    background-image: url(${imageDesktop});
    background-repeat: no-repeat;
    background-size: cover;
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
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    margin-bottom: 5px;

    @media (min-width: 1280px) {
      top: 168px;
      left: 18%;
      transform: translateX(0);
    }
  }
`;

export default Wrapper;
