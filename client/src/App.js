import React from "react";
import Auth from './utils/Auth';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import SignUp from "./pages/SignUp";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/home" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <PrivateRoute exact path="/protected" component={Users} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
