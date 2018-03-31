import React, { Component } from "react";
import API from "../../utils/API";
import Auth from '../../utils/Auth';
import { Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    userType: "",
    errorMessage: null
  };

  componentDidMount() {
  };

  authenticate = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        Auth.authenticateUser(res.data.token);

        // hard redirect to / to reload all the state and nav
        window.location.href = "/";
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  signUp = () => {
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      userType: this.state.userType
    };

    API.signUp(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });

        // authenticate the user after successful sign up
        this.authenticate();
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.password && this.state.userType && this.state.password.length >= 8) {
      this.signUp();
    } else {
      this.setState({ errorMessage: "Please enter all required fields to sign up."})
    }
  };

  render() {
    return (
      <Container fluid>
        <form className="form-signin">
          <h1 className="h4 mb-3 font-weight-normal">Please sign up</h1>
          <label htmlFor="username" className="sr-only">Name</label>
          <Input
            value={this.state.name}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            name="name"
            placeholder="Name (required)"
            className="form-control"
            required=""
            autoFocus={true}
          />
          <label htmlFor="username" className="sr-only">Email</label>
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            name="email"
            placeholder="Email (required)"
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
          <label htmlFor="password" className="sr-only">Password</label>
          <select
            value={this.state.userType}
            onChange={this.handleInputChange}
            name="userType"
            placeholder="User type"
            className="form-control"
            required=""
          >
            <option value="" disabled>Select role</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
          <div className="checkbox mb-3 text-danger">
            {this.state.errorMessage}
          </div>
          <div className="mb-3">
            <button
              disabled={!(this.state.email && this.state.password && this.state.password.length >= 6)}
              onClick={this.handleFormSubmit}
              className="btn btn-lg btn-primary btn-block"
            >
              Sign Up
            </button>
          </div>
        </form>
      </Container>
    );
  }
}

export default SignUp;
