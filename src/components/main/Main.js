import {Suspense} from 'react';
import {useSelector} from 'react-redux';
import { Switch, Route, NavLink } from "react-router-dom";
import mainRoutes from '../../routes/mainRoutes';
import PublicRoute from '../publicRoute/PublicRoute';
import GeneralRoute from '../publicRoute/GeneralRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Home from '../../pages/home/Home';

const Main = () => {

  const isAuth = useSelector(state => state.auth.isAuth);
  const dailyRate = useSelector(state => state.health.dailyRate);

  return (
    <>
     <Suspense fallback={<h2>...loading</h2>}>
    
        <Switch>
          
        
        {mainRoutes.map((route) => {
            if (route.isPrivate===true){
            return dailyRate && (<PrivateRoute {...route} isAuth={isAuth} key={route.path}/>) 
      
            } 
            if(route.isPrivate===false){
              return (<PublicRoute {...route} isAuth={isAuth} key={route.path} dailyRate={dailyRate}/>)
            }
        })}

        <Route path='/' exact={true} component={Home} />

        {/* if(dailyRate){
          (<PrivateRoute {...route} isAuth={isAuth} key={route.path} dailyRate={dailyRate}/>) 
        } */}

          <GeneralRoute/>
        </Switch>

      
      </Suspense>
    </>
    );
};

export default Main;
