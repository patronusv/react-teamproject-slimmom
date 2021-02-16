import React from 'react';
import {useSelector} from 'react-redux';
import Logo from '../logo/Logo';
import UserInfo from '../userInfo/UserInfo';
import Navigation from '../navigation/Navigation';
import {HeaderContainer,Nav,Container,BurgerButton,UserInfoContainerTablet,UserInfoContainerMobile,
  HeaderWrapper,UserInfoContainerDesktop} from './headerStyled';


const Header = () => {

  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <>
      <HeaderContainer>
        <Container className="container">
          <Logo/>

        <Nav isAuth={isAuth}>
          <Navigation/>
        </Nav>

        <HeaderWrapper>
          <UserInfoContainerTablet>
            {isAuth &&
              (<UserInfo/>)}
          </UserInfoContainerTablet>

          {isAuth &&
          (<BurgerButton type="button">Burger menu</BurgerButton>)}

          <UserInfoContainerDesktop>
            {isAuth &&
              (<UserInfo/>)}
          </UserInfoContainerDesktop>

        </HeaderWrapper>
        
        </Container>
      </HeaderContainer>
      
      <UserInfoContainerMobile>
        {isAuth &&
            (<UserInfo/>)}
      </UserInfoContainerMobile>
    </>
  );
};

export default Header;
