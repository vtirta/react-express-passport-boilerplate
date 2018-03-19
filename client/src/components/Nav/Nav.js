import React from "react";

const Nav = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">LMS</a>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="/">React Reading List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">List of Users</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <a className="nav-link" href="/signin">Sign In</a>
      </form>
    </div>
  </nav>;

export default Nav;
