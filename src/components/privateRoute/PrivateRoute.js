import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Calculator from '../../pages/calculator/Calculator';
import notificActions from '../../redux/actions/notificActions';

const PrivateRoute = ({
  path,
  exact,
  component,
  isPrivate,
  restricted,
  dailyRate,
}) => {
  const dispatch = useDispatch();

  return !isPrivate ? (
    <Redirect to="/login" />
  ) : restricted && dailyRate ? (
    <Route path={path} exact={exact} component={component} />
  ) : !restricted ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    (dispatch(notificActions.showNotification()),
    setTimeout(() => {
      dispatch(notificActions.hideNotification());
    }, 4000),
    (<Redirect to="/calculator" />))
  );
};

export default PrivateRoute;
