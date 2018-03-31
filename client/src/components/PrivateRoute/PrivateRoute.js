import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Auth from '../../utils/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Auth.isUserAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

export default PrivateRoute;
