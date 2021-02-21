import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/selectors/authSelectors';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import PublicRoute from '../publicRoute/PublicRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';
import healthSelectors from '../../redux/selectors/healthSelectors';
import LoaderSpinner from '../loader/Loader';
import Home from '../../pages/home/Home';

const Main = () => {
  const isAuth = useSelector(authSelectors.isAuth);
  const dailyRate = useSelector(healthSelectors.getDailyRate);


  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          {mainRoutes.map(route => {
            console.log(isAuth);
            // if (isAuth) {
            //   return (
            //     <PrivateRoute
            //       {...route}
            //       key={route.path}
            //       dailyRate={dailyRate}
            //       isAuth={isAuth}
            //     />
            //   );
            // }
            //   if(!isAuth) {
            //   return <PublicRoute {...route} key={route.path} dailyRate={dailyRate}/>;
            // }

            if (route.isPrivate) {
              return (
                < PrivateRoute
                  {...route}
                  key={route.path}
                  dailyRate={dailyRate}
                  isAuth={isAuth}
                />
              );
            }
              if(!route.isPrivate) {
              return <PublicRoute {...route} key={route.path} dailyRate={dailyRate}/>
            }

            
            // if (route.isPrivate && !dailyRate) {
            //   return (
            //     < Redirect to ="/calculator" key="calculator"/>
            //   )
            // }
          })}


        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
