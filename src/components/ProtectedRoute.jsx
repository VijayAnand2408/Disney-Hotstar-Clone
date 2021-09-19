import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, state, ...rest }) => {
  return (
    {
        if(state){
            return <Route exact path="/admin" component={Component} />
        }
    }
  )
}

export default ProtectedRoute;