import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/Auth';

class Logout extends React.Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    
    // change the current URL to / after logout
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
      </div>
    )
  }
}

Logout.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Logout;
