import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../logo/Logo';

import UserInfo from '../userInfo/UserInfo';
import Navigation from '../navigation/Navigation';
import { isAuth } from '../../redux/selectors/authSelectors';
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

const Header = () => {
  const authFlag = useSelector(isAuth);
  const [menuBurger, setMenuBurger] = useState(false);
  // console.log(menuBurger, setMenuBurger);
  // const authFlag = true;

  return (
    <>
      <HeaderContainer>
        <div className="container">
          <Container>
            <Logo isAuth={authFlag} />

            <Nav isAuth={authFlag}>
              <Navigation />
            </Nav>

            <HeaderWrapper>
              <UserInfoContainerTablet>
                {authFlag && <UserInfo />}
              </UserInfoContainerTablet>

              {authFlag && (
                <BurgerButton
                  type="button"
                  onClick={() => setMenuBurger(!menuBurger)}
                >
                  menu
                </BurgerButton>
              )}

              {authFlag && menuBurger && (
                <Nav isActive={menuBurger}>
                  <Navigation isActive={menuBurger} />
                </Nav>
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
