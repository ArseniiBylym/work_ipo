import React, { Component } from 'react';
import Entrepreneur from './EntrepreneurProjects';
import Investor from './InvestorProjects';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Projects extends Component {

  render() {
    // const { userType } = this.props;
    const { userType } = this.props;
    let content;

    switch (userType) {
      case 'investor':
        content = <Investor />;
        break;

      case 'enterpreneur':
        content = <Entrepreneur />
        break;

      default: {
        content = <span className="not-found">404 Page not found</span>
      }
    }

    return (
      <div>
        {content}
      </div>
    );
  }

}

export default withRouter(
  connect(
    state => {
      return {
        userType: state.pageContent.userType,
      }
    }
)(Projects));
