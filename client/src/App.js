import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Users from "./pages/Users";
import SignIn from "./pages/SignIn";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <PrivateRoute exact path="/protected" component={Users} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/signin" component={SignIn} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
