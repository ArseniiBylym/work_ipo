import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';

import Footer from "./components/common/Footer";
import Page from "./containers/Page";
import Login from "./containers/Login";

import history from './history';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css';
import './App.css';

class App extends Component {
    render() {
        return (
			<Router history={history}>
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
