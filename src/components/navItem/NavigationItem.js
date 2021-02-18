import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({
  path,
  name,
  exact,
  isPrivate,
  isAuth,
  general,
  onToggleBurger,
}) => {
  return (
    <>
      {!isPrivate && !general && !isAuth && (
        <li key={path} className="nav-list-item">
          <NavLink
            to={path}
            exact={exact}
            className="link"
            activeClassName="activeLink"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && (
        <li key={path} className="nav-list-item">
          <NavLink
            to={path}
            exact={exact}
            className="link"
            activeClassName="activeLink"
            onClick={onToggleBurger}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
