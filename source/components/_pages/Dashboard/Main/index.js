import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Dash from './pages';
import './main.styl';
import { connect } from 'react-redux';
import CreateNew from './CreateNew';
// import MyProfile from './MyProfile/MyProfile';
import TeamMemberEdit from './TeamMemberEdit/TeamMemberEdit';
import AllTeamEdit from './AllTeamEdit/AllTeamEdit';
import TermsOfService from './TermsOfService/TermsOfService';
import Settings from './Settings';

class Main extends Component {

  componentDidMount = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }

  componentDidUpdate = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }

  render() {
    const path = '/dash';
    const { userType, userId } = this.props.user;

    const projectsPathPattern = userType === 'investor' ? ':projectType/' : '';

    return (
      <div className="dash-main">
        <Switch>
          <Route exact path={`${path}/:userType/:userId/projects`} component={Dash.Projects} />
          <Route exact path={`${path}/:userType/:userId/projects/${projectsPathPattern}:projectId`} component={Dash.ProjectSingle}/>
          <Route exact path={`${path}/:userType/:userId/projects/${projectsPathPattern}:projectId/statistic`} component={Dash.Statistic} />
          <Route exact path={`${path}/:userType/:userId/profile`} component={Dash.Profile} />
          <Route exact path={`${path}/:userType/:userId/profile/all_team_edit`} component={AllTeamEdit} />
          <Route exact path={`${path}/:userType/:userId/profile/:id`} component={TeamMemberEdit} />
          <Route exact path={`${path}/:userType/:userId/settings`} component={Settings} />
          <Route exact path={`${path}/:userType/terms`} component={TermsOfService} />
          <Route exact path={`${path}/:userType/projects/createNew`} component={CreateNew} />
          <Redirect from={`${path}/`} to={`${path}/${userType}/${userId}/projects`} />
        </Switch>
      </div>
    );
  }

}

export default withRouter(connect(
  state => {
    return {
      user: state.pageContent,
    }
  }
)(Main));
