import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../logo/Logo';

import UserInfo from '../userInfo/UserInfo';
import Navigation from '../navigation/Navigation';
import {isAuth} from '../../redux/selectors/authSelectors';
import {
  HeaderContainer,
  Nav,
  Container,
  BurgerButton,
  UserInfoContainerTablet,
  UserInfoContainerMobile,
  HeaderWrapper,
  UserInfoContainerDesktop,
} from './headerStyled';
import openMenu from '../../assets/images/burgerMenu/openMenu.svg';
import closeMenu from '../../assets/images/burgerMenu/closeMenu.svg';
import healthSelectors from '../../redux/selectors/healthSelectors';

const Header = () => {
  const authFlag = useSelector(isAuth);
  const dailyRate = useSelector(healthSelectors.getDailyRate);
  const [menuBurger, setMenuBurger] = useState(false);
  const toggleBurger = () => setMenuBurger(!menuBurger);

  return (
    <>
      <HeaderContainer>
        <div className="container">
          <Container>
            <Logo isAuth={authFlag} dailyRate = {dailyRate}/>

            <Nav isAuth={authFlag}>
              <Navigation />
            </Nav>

            <HeaderWrapper>
              <UserInfoContainerTablet>
                {authFlag && <UserInfo />}
              </UserInfoContainerTablet>

              {authFlag && (
                <BurgerButton type="button" onClick={toggleBurger}>
                  {!menuBurger ? (
                    <img src={openMenu} alt="" />
                  ) : (
                    <img src={closeMenu} alt="" />
                  )}
                </BurgerButton>
              )}

              {authFlag && menuBurger && (
                <div className="navWrapper">
                  <Nav isActive={menuBurger}>
                    <Navigation
                      isActive={menuBurger}
                      onToggleBurger={toggleBurger}
                    />
                  </Nav>
                </div>
              )}

              <UserInfoContainerDesktop>
                {authFlag && <UserInfo />}
              </UserInfoContainerDesktop>
            </HeaderWrapper>
          </Container>
        </div>
      </HeaderContainer>

      <UserInfoContainerMobile>
        {authFlag && <UserInfo />}
      </UserInfoContainerMobile>
    </>
  );
};

export default Header;
