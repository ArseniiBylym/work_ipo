import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../../../redux/actions/authActions';
import { withRouter, Link, NavLink } from 'react-router-dom';

class Logout extends Component {

  // static propTypes = {
  //   click: PropTypes.func
  // }

  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { className, text } = this.props;

    return (
      <NavLink
        to="#"
        className={`${className || ''}`}
        onClick={this.logout}
        children={text}
      />
    );
  }

}

export default withRouter(
  connect(null, { logout })(Logout)
);

 // return (
 //      <NavLink
 //        to="#"
 //        className={`${className || ''}`}
 //        onClick={logout}
 //      >
 //        Log Out
 //      </NavLink>
 //    );
 //  }
