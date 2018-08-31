import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../../redux/actions/authActions';
import { withRouter, Link, NavLink } from 'react-router-dom';

class Logout extends Component {

  onClickEvent = (e) => {
    e.preventDefault()
    this.props.click()
    // logout()
  }

  render() {
    const { className, logout, text } = this.props;

    return (
      <NavLink
        to="#"
        className={`${className || ''}`}
        onClick={(e)=> {
            this.onClickEvent(e);
            
          }
        }
      >
        {text}
      </NavLink>
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