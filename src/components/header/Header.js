import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../logo/Logo';

import UserInfo from '../userInfo/UserInfo';
import Navigation from '../navigation/Navigation';
import {isAuth} from '../../redux/selectors/authSelectors';
import {HeaderContainer,Nav,Container,BurgerButton,UserInfoContainerTablet,UserInfoContainerMobile,
  HeaderWrapper,UserInfoContainerDesktop} from './headerStyled';


const Header = () => {







  const authFlag = useSelector(isAuth);
  // const authFlag = true;
  
 
  return (
    <>
      <HeaderContainer>
        <div className="container">
          <Container>
          <Logo isAuth={authFlag}/>

          <Nav isAuth={authFlag}>
            <Navigation />
          </Nav>


          <HeaderWrapper>
            <UserInfoContainerTablet>
              {authFlag &&
                (<UserInfo/>)}
            </UserInfoContainerTablet>

            {authFlag &&
            (<BurgerButton type="button">menu</BurgerButton>)}

            <UserInfoContainerDesktop>
              {authFlag &&
                (<UserInfo/>)}
            </UserInfoContainerDesktop>

          </HeaderWrapper>

        </Container>
        </div>
      </HeaderContainer>
      
      <UserInfoContainerMobile>
        {authFlag &&
            (<UserInfo/>)}
      </UserInfoContainerMobile>
    </>
  );
};

export default Header;
