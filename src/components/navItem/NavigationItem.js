import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import healthSelectors from '../../redux/selectors/healthSelectors';
import notificActions from '../../redux/actions/notificActions';

const NavigationItem = ({
  path,
  name,
  exact,
  isPrivate,
  isAuth,
  general,
  onToggleBurger,
  isActive
}) => {

  const dispatch = useDispatch();
  const alertFlag = useSelector(healthSelectors.getDailyRate);

  const handleClick=e=>{
    isActive && onToggleBurger();
   
    if(!alertFlag && path ==='/diary'){
      dispatch(notificActions.showNotification());

        setTimeout(() => {
      dispatch(notificActions.hideNotification());
      }, 4000);
    
  };
}

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
            onClick={handleClick}
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
