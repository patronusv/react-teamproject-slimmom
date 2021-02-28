import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ path, exact, component,dailyRate,isAuth,restricted}) => {
  

  return isAuth && restricted ? 
   <Redirect to="/calculator"/> :

  <Route path={path} exact={exact} component={component} key={path}/> 
  
};

export default PublicRoute;