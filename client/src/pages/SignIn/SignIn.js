import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { Input } from "../../components/Form";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: null,
    session: null
  };

  componentDidMount() {
  }

  authenticate = () => {
    API.authenticateUser(this.state.username, this.state.password)
      .then(res =>
        this.setState({ session: true })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = event => {
    event.target.select();
  };

  handleSignIn = event => {
    event.preventDefault();
    if (this.state.canSignIn) {
      API.authenticateUser(this.state.username, this.state.password)
        .then(res =>
          this.setState({ session: true })
        )
        .catch(err => console.log(err));
    } else {
      this.setState({ errorMessage: "Please enter valid username and password to sign in."})
    }
  };

  render() {
    return (
      <Container fluid>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="username" className="sr-only">Username</label>
          <Input
            value={this.state.username}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            name="username"
            placeholder="Username or email (required)"
            className="form-control"
            required=""
            autoFocus={true}
          />
          <label htmlFor="password" className="sr-only">Password</label>
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            type="password"
            placeholder="Password (required)"
            className="form-control"
            required=""
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <div className="mb-3">
            <button
              disabled={!(this.state.username && this.state.password && this.state.password.length >= 6)}
              onClick={this.handleFormSubmit}
              className="btn btn-lg btn-primary btn-block"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-5 mb-3">
          Don't have an account? 
          <Link to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </Container>
    );
  }
}

export default SignIn;
