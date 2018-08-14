import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../../redux/actions/authActions';
import { withRouter, Link } from 'react-router-dom';

class Logout extends Component {

  render() {
    const { className, logout } = this.props;

    return (
      <Link
        to="#"
        className={`${className || ''}`}
        onClick={logout}
      >
        Log Out
      </Link>
    );
  }

}

export default withRouter(
  connect(null, { logout })(Logout)
);
