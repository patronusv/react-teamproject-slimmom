import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid #e0e0e0;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px;
    height: 80px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
    height: 80px;
  }

  @media (min-width: 1280px) {
    justify-content: flex-start;
    align-items: center;
    border-bottom: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  position: relative;

  ${props =>
    props.isActive &&
    ` 
      background: #264061;
      position: absolute;
      left: 0px;
      top: 80px;
      z-index: 50;
      width: 100%;
      height: 100%;
    
    `}

  @media (max-width: 1279px) {
    display: ${props => (props.isAuth ? 'none' : 'block')};
  }

  @media (min-width: 1280px) {
    transform: translateY(24px);
    margin-left: 44px;

    &::before {
      content: '';
      display: block;
      width: 2px;
      height: 32px;
      background-color: grey;
      position: absolute;
      top: 0;
      left: -43px;
      margin-left: 22px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

export const BurgerButton = styled.button`
  display: block;
  background-color: inherit;
  border: none;
  & :hover,
  :focus,
  :active {
    outline: none;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    /* margin-left: 110px; */
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 56px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;
export const UserInfoContainerMobile = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const UserInfoContainerTablet = styled.div`
  display: none;

  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    align-items: center;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;

  /* @media (min-width: 1280px) {
        display:none;
    } */
`;

export const UserInfoContainerDesktop = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    margin-left: auto;
  }
`;
