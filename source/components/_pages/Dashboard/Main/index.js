import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Dash from './pages';
import './main.styl';

class Main extends Component {

  render() {
    const path = '/dash';
    // const { path } = this.props.match;
    return (
      <div className="dash-main">
        <Router>
          <Switch>
            <Route exact path={`${path}/projects`} component={Dash.Projects} />
            <Route exact path={`${path}/projects/:project`} component={Dash.ProjectSingle}/>
            <Route exact path={`${path}/projects/:project/statistic`} component={Dash.Statistic} />
            <Route exact path={`${path}/projects/:project/statistic/company`} component={Dash.StatCompany} />
            <Route exact path={`${path}/profile`} component={Dash.Profile} />
            <Route exact path={`${path}/settings`} component={Dash.Settings} />
            <Redirect from={`${path}/`} to={`${path}/projects`} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default withRouter(Main);
// export default Main
