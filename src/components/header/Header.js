import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import { HeaderContainer, Nav, Container, BurgerButton } from './headerStyled';
import UserInfo from '../userInfo/UserInfo';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <>
      <HeaderContainer>
        <Container className="container">
          <Logo />

          <Nav isAuth={isAuth}>
            <Navigation />
          </Nav>

          {isAuth && <BurgerButton type="button">Burger menu</BurgerButton>}
          <UserInfo />
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header;
