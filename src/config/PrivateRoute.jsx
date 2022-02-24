import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// handle the private routes
function PrivateRoute({ comp: Component, ...rest }) {

    const checkValidToken = getToken;
    
    return (
        <React.Fragment>
      {checkValidToken()
          ? <Route {...rest} render={props => <Component {...rest} {...props} />} />
          : <Redirect to="/" />
      }
    </React.Fragment>
    )
}
 
export default PrivateRoute;