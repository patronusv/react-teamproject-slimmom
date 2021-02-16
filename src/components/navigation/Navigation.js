import React, { Suspense } from "react";
import {useSelector} from 'react-redux';
import mainRoutes from '../../routes/mainRoutes';
import NavigationItem from '../navItem/NavigationItem';
import {NavListContainer} from '../navigation/Navigation.styled';

const Navigation = () => {

  const isAuth = useSelector(state => state.auth.isAuth);
  return (
  <>
    <NavListContainer>
      {mainRoutes.map((route) => (
        <NavigationItem {...route} key={route.path} isAuth={isAuth}/>
      ))}

    </NavListContainer>
  </>);
};

export default Navigation;
