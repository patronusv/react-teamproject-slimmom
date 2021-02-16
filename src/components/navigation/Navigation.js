import React, { Suspense } from "react";
import mainRoutes from '../../routes/mainRoutes';
import NavigationItem from '../navItem/NavigationItem';
import {NavListContainer} from '../navigation/Navigation.styled';

const Navigation = ({link1,link2,isAuth}) => {
  return (
  <>
    <NavListContainer>
      {mainRoutes.filter(item=>item.path===link1 || item.path===link2).map((route) => (
        <NavigationItem {...route} key={route.path} isAuth={isAuth}/>
      ))}
    </NavListContainer>
  </>);
};

export default Navigation;
