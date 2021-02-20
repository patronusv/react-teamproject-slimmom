import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({
  path,
  exact,
  component,
  isPrivate,
  restricted,
  dailyRate,
}) => {
  

  return !isPrivate ? (
    <Redirect to="/login" />
  ) : restricted && dailyRate ? (
    <Route path={path} exact={exact} component={component} />
  ) : !restricted ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    (<Redirect to="/calculator" />)
  );
};

export default PrivateRoute;
