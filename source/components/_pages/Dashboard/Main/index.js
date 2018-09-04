import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Dash from './pages';
import './main.styl';

import CreateNew from './CreateNew';
import MyProfile from './MyProfile/MyProfile';
import TeamMemberEdit from './TeamMemberEdit/TeamMemberEdit';
import AllTeamEdit from './AllTeamEdit/AllTeamEdit';
import TermsOfService from './TermsOfService/TermsOfService';
import Settings from './Settings';
import Projects from './Projects/EntrepreneurProjects.js'


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
    // const { path } = this.props.match;
    return (
      <div className="dash-main">
          <Switch>

            <Route exact path={`${path}/projects`} component={Projects} />
            <Route exact path={`${path}/profile`} component={MyProfile} />
            <Route exact path={`${path}/profile/all_team_edit`} component={AllTeamEdit} />
            <Route exact path={`${path}/profile/:id`} component={TeamMemberEdit} />
            <Route exact path={`${path}/terms`} component={TermsOfService} />
            <Route exact path={`${path}/projects/createNew`} component={CreateNew} />
            <Route exact path={`${path}/settings`} component={Settings} />
            <Route exact path={`${path}/projects/:project`} component={Dash.ProjectSingle}/>
            <Route exact path={`${path}/projects/:project/statistic`} component={Dash.Statistic} />
              <Route exact path={`${path}/projects/:project/statistic/company`} component={Dash.StatCompany} />
              <Redirect from={`${path}/`} to={`${path}/projects`} />

          </Switch>
      </div>
    );
  }

}

export default withRouter(Main);
