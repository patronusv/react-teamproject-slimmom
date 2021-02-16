import styled from 'styled-components';
import imageDesktop from '../../assets/images/loginRegistr/desktop-home.jpg';
import imageTablet from '../../assets/images/loginRegistr/tablet-home.jpg';

const LoginWrapper = styled.div`
  padding-top: 362px;
  padding-bottom: 190px;

  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    background-image: url(${imageTablet});
  }

  @media (min-width: 1280px) {
    background-image: url(${imageDesktop});
  }
`;

export default LoginWrapper;
