import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Dash from './pages';
import './main.styl';
import { connect } from 'react-redux';
import CreateNew from './CreateNew';
import MyProfile from './MyProfile/MyProfile';
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
    const { userType } = this.props;

    const projectsPathPattern = userType === 'investor' ? ':projectType/' : '';

    return (
      <div className="dash-main">
        <Switch>
          <Route exact path={`${path}/:userType/projects`} component={Dash.Projects} />
          <Route exact path={`${path}/:userType/projects/${projectsPathPattern}:projectId`} component={Dash.ProjectSingle}/>
          <Route exact path={`${path}/:userType/projects/${projectsPathPattern}:projectId/statistic`} component={Dash.Statistic} />
          <Route exact path={`${path}/:userType/projects/${projectsPathPattern}:projectId/statistic/company`} component={Dash.StatCompany} />
          <Route exact path={`${path}/:userType/profile`} component={MyProfile} />
          <Route exact path={`${path}/:userType/profile/all_team_edit`} component={AllTeamEdit} />
          <Route exact path={`${path}/:userType/profile/:id`} component={TeamMemberEdit} />
          <Route exact path={`${path}/:userType/terms`} component={TermsOfService} />
          <Route exact path={`${path}/:userType/projects/createNew`} component={CreateNew} />
          <Route exact path={`${path}/:userType/settings`} component={Settings} />
          <Redirect from={`${path}/`} to={`${path}/${userType}/projects`} />
        </Switch>
      </div>
    );
  }

}

export default withRouter(connect(
  state => {
    return {
      userType: state.pageContent.userType,
    }
  }
)(Main));
