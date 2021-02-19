import imageDesktop from '../../assets/images/calculatorPage/desktop.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 60px;

  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    padding-top: 100px;
    margin-bottom: 73px;
  }

  @media (min-width: 1280px) {
    padding-top: 143px;
    padding-bottom: 111px;
    background-image: url(${imageDesktop});
  }
  .calculatorPage {
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    @media (min-width: 768px) {
    }

    @media (min-width: 1280px) {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
