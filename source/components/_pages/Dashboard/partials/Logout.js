// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { logout } from '../../../../redux/actions/authActions';
// import { withRouter, Link, NavLink } from 'react-router-dom';

// class Logout extends Component {

//   logout = (e) => {
//     console.log('click on logout')
//     e.preventDefault();
//     this.props.logout();
//     return false
//   }

//   render() {
//     const { className, text } = this.props;

//     return (
//       <NavLink
//         to="#"
//         className={`${className || ''}`}
//         onClick={this.logout}
//         children={text}
//       />
//     );
//   }

// }

// export default withRouter(
//   connect(null, { logout })(Logout)
// );


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../../../redux/actions/authActions';
import { withRouter, Link, NavLink } from 'react-router-dom';

class Logout extends Component {

  logout = (e) => {
    console.log(this.props)
    console.log('click on logout')
    e.preventDefault();
    console.log('click on logout 2')
    this.props.click();
    return false
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
