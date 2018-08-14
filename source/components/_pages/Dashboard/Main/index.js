import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Dash from './pages';
import './main.styl';

class Main extends Component {

  render() {
    const { path } = this.props.match;

    return (
      <div className="dash-main">
        <Router>
          <Switch>
            <Route  path={`${path}/projects/purchase`} component={Dash.Projects} />
            <Route  path={`${path}/projects/statistic`} component={Dash.Statistic} />
            <Redirect from={`${path}/`} to={`${path}/projects/purchase`} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default withRouter(Main);
