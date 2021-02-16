import {Suspense} from 'react';
import {useSelector} from 'react-redux';
import { Switch, Route, NavLink } from "react-router-dom";
import mainRoutes from '../../routes/mainRoutes';
import PublicRoute from '../publicRoute/PublicRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';

const Main = () => {

  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <>
     <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
        {mainRoutes.map((route) => (
            route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} key={route.path} />
          )
        ))}
        </Switch>
      </Suspense>
    </>
    );
};

export default Main;
