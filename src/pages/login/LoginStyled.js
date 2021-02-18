import styled from 'styled-components';
import imageDesktop from '../../assets/images/loginRegistr/desktop-home.jpg';
import imageTablet from '../../assets/images/loginRegistr/tablet-home.jpg';

const LoginWrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 177px;

  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-width: 768px) {
    padding-top: 271px;
    padding-bottom: 466px;
    background-image: url(${imageTablet});
  }

  @media (min-width: 1280px) {
    padding-top: 362px;
    padding-bottom: 190px;
    background-image: url(${imageDesktop});
  }
`;

export default LoginWrapper;
