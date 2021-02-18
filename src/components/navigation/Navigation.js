import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { isAuth } from '../../redux/selectors/authSelectors';
import mainRoutes from '../../routes/mainRoutes';
import NavigationItem from '../navItem/NavigationItem';
import { NavListContainer } from '../navigation/Navigation.styled';

const Navigation = ({ isActive, onToggleBurger }) => {
  const authFlag = useSelector(isAuth);
  const burgerFlag = isActive;
  // const authFlag  = true;
  // console.log(onToggleBurger);

  return (
    <>
      <NavListContainer isActive={burgerFlag}>
        {mainRoutes.map(route => (
          <NavigationItem
            {...route}
            key={route.path}
            isAuth={authFlag}
            onToggleBurger={onToggleBurger}
          />
        ))}
      </NavListContainer>
    </>
  );
};

export default Navigation;
