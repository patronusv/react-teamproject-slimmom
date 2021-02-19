import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/selectors/authSelectors';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import PublicRoute from '../publicRoute/PublicRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';
import healthSelectors from '../../redux/selectors/healthSelectors';
import LoaderSpinner from '../loader/Loader';

const Main = () => {
  const isAuth = useSelector(authSelectors.isAuth);
  const dailyRate = useSelector(healthSelectors.getDailyRate);

  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          {mainRoutes.map(route => {
            if (isAuth) {
              return (
                <PrivateRoute
                  {...route}
                  key={route.path}
                  dailyRate={dailyRate}
                />
              );
            } else {
              return <PublicRoute {...route} key={route.path} />;
            }
          })}
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
