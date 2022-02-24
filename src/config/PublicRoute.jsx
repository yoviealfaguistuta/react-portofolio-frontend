import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
// handle the public routes
function PublicRoute({ comp: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={(props) => <Component {...rest} {...props}  />}
        />
    )
}
 
export default PublicRoute;