import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { BrowserRouter as Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        false ? (
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

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.isAuthenticated,
    };
}

export default connect(mapStateToProps)(PrivateRoute);
