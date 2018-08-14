import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }

}

export default Dashboard;
