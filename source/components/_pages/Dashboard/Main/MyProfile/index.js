import React, { Component } from 'react';
import { connect } from 'react-redux';
import Entr from './EnterpreneurMyProfile';
import Investor from './InvestorMyProfile';
import Loader from '../../partials/Loader';

class Profile extends Component {

  render() {
    const { userType } = this.props;
    let content;

    switch (userType) {
      case 'investor':
        content = <Investor match={this.props.match}/>
        break;

      case 'enterpreneur': {
        content = <Entr match={this.props.match}/>
        break;
      }

      default:
        content = <Loader />
    }

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  }

}

export default connect(
  state => ({
    userType: state.pageContent.userType,
  })
)(Profile);
