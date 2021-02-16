import React, {useEffect} from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import {HeaderContainer,Nav,Container,BurgerButton} from './headerStyled';
import {useSelector} from 'react-redux';


const Header = () => {
  console.log(window)

  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <>
      <HeaderContainer>
        <Container className="container">
          <Logo/>

         
          {!isAuth &&

          (<Nav>
            <Navigation link1="/register" link2="/login" isAuth={isAuth}/>
          </Nav>)}

          {isAuth && 
          (
            (<Nav isAuth={isAuth}>
              <Navigation link1="/diary" link2="/calculator" isAuth={isAuth}/>
            </Nav>)
          )
          }

          {isAuth &&
          (<BurgerButton type="button">Burger menu</BurgerButton>)}
        
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header;
