import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ path, name, exact, isPrivate}) => {
  return (
    <>
      {!isPrivate &&  (
        <li key={path} className="nav-list-item">
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {
    //   isAuth && 
      isPrivate &&  (
        <li  key={path} className="nav-list-item">
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}

      {/* {
      isAuth && 
      !isPrivate &&  (
        <li  key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
            {name.toUpperCase()}
          </NavLink>
        </li>
      )} */}
    </>
  );
};

export default NavigationItem;