import imageDesktop from '../../assets/images/homaPage/desktop.jpg';
import imageTablet from '../../assets/images/homaPage/tablet.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 80px;

  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    background-image: url(${imageTablet});
    padding-top: 150px;
    padding-bottom: 300px;

    /* position: absolute;
    top: 0;
    z-index: -100;
    overflow: hidden; */
  }

  @media (min-width: 1280px) {
    margin-top: -148px;
    padding-top: 294px;
    padding-bottom: 45px;
    background-image: url(${imageDesktop});
  }
`;

export default Wrapper;
