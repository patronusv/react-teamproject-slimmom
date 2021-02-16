import React from "react";
import { Route, Redirect } from "react-router-dom";

const GeneralRoute = () => {
  return (
    <Redirect to="/"/>
  )
}
 

  // switch(isAuth && dailyRate){
  //   case isAuth && dailyRate:
  //     return (<Route path={path} exact={exact} component={component} />)
    
  //    case isAuth && !dailyRate:
  //     return (<Route path='/' exact={exact} component={component} />)

  //   case !isAuth:
  //     return (<Redirect to='/login' />)
    
  //     default:
  //       return <Redirect to='/login' />
    
  // }


export default GeneralRoute;