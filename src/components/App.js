import Header from './header/Header';
import Main from './main/Main';
import {Suspense} from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import mainRoutes from '../routes/mainRoutes';


const App = () => {
  return (
    <>
      <Header />
      <Main />
      {/* <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
        {mainRoutes.map((route) => (
            route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} key={route.path} />
          )
        ))}
        </Switch>
      </Suspense> */}
    </>
  );
};

export default App;
