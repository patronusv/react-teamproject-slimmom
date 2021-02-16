import React, { Suspense } from "react";
import {useSelector} from 'react-redux';
import {isAuth} from '../../redux/selectors/authSelectors';
import mainRoutes from '../../routes/mainRoutes';
import NavigationItem from '../navItem/NavigationItem';
import {NavListContainer} from '../navigation/Navigation.styled';

const Navigation = () => {

  const authFlag  = useSelector(isAuth);
  // const authFlag  = true;
  
  return (
  <>
    <NavListContainer>
      {mainRoutes.map((route) => (
        <NavigationItem {...route} key={route.path} isAuth={authFlag}/>
      ))}

    </NavListContainer>
  </>);
};

export default Navigation;
