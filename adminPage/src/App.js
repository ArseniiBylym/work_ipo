import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';

import Footer from "./components/common/Footer";
import Page from "./containers/Page";
import Login from "./containers/Login";

import createBrowserHistory from 'history/createBrowserHistory'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <React.Fragment>
                    <div className="App">
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route component={Page} />
                        </Switch>
                    </div>
                    <Footer />
                </React.Fragment>            
            </Router>
        );
    }
}

export default App;
