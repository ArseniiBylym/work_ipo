import React, { Component } from 'react';
import Stat from './Stat';
import { connect } from 'react-redux';
import { getProject } from '../../../../../redux/actions/projectsActions';
import SecondaryHeader from '../../SecondaryHeader';
import Loader from '../../partials/Loader';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
import StatTotal from './StatTotal';
import StatUnit from './StatUnit';
import './stat.styl';

import m from '../../../../_HOC/lang.hoc'

class Main extends Component {

  componentDidMount() {
    this.props.getProject();
  }

  render() {
    const { statFilter, item } = this.props;

    let content;

    if(!item) {
      content = <Loader />
    } else {
      content = (
        <div className="stat" dir={this.props.dir}>
          <div className="stat__inner">
            <Tabs defaultActiveTabIndex={1} height={10} tabsAddClassName='stat__tabs'>
              <Tab title="Total Money Invested">
                <StatTotal dateRange={statFilter.value} item={item.purchases} />
              </Tab>
              <Tab title="Units Invested">
                <StatUnit dateRange={statFilter.value} item={item.purchases} />
              </Tab>
            </Tabs>
          </div>
        </div>
      )
    }

    return (
      <div className="">
        <SecondaryHeader statisticControls />
        {content}
      </div>
    );
  }

}

export default connect(
  state => ({
    statFilter: state.header.statFilter,
    item: state.projects.item,
  }), { getProject }
)(Main)
