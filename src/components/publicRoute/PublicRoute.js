import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ path, exact, component}) => {
  return (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;