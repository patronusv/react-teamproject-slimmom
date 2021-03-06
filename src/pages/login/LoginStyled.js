import styled from 'styled-components';
import imageDesktop from '../../assets/images/loginRegistr/desktop-home.jpg';
import imageTablet from '../../assets/images/loginRegistr/tablet-home.jpg';

const LoginWrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 177px;

  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    padding-top: 362px;
    padding-bottom: 466px;

    background-image: url(${imageTablet});
    position: absolute;
    top: 0;
    z-index: -100;
    overflow: hidden;
  }

  @media (min-width: 1280px) {
    padding-top: 362px;
    padding-bottom: 190px;
    background-image: url(${imageDesktop});
  }
`;

export default LoginWrapper;
