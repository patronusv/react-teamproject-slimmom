import {Suspense} from 'react';
import {useSelector} from 'react-redux';
import {isAuth} from '../../redux/selectors/authSelectors';
import { Switch, Route, NavLink } from "react-router-dom";
import mainRoutes from '../../routes/mainRoutes';
import PublicRoute from '../publicRoute/PublicRoute';
import GeneralRoute from '../publicRoute/GeneralRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Home from '../../pages/home/Home';

const Main = () => {

  const authFlag  = useSelector(isAuth);
  // const authFlag = true;
  const dailyRate = 10;

  return (
    <>
     <Suspense fallback={<h2>...loading</h2>}>
    
        <Switch>
          
        
        {mainRoutes.map((route) => {
            if (route.isPrivate===true){
            return dailyRate && (<PrivateRoute {...route} isAuth={authFlag} key={route.path}/>) 
      
            } 
            if(route.isPrivate===false){
              return (<PublicRoute {...route} isAuth={authFlag} key={route.path} dailyRate={dailyRate}/>)
            }
        })}

        <Route path='/' exact={true} component={Home} />

       

          <GeneralRoute/>
        </Switch>

      
      </Suspense>
    </>
    );
};

export default Main;
