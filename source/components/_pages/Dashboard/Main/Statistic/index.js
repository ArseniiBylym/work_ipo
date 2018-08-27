import React, { Component } from 'react';
import Stat from './Stat';
import { connect } from 'react-redux';
import { getProject, setCurrentUnitValue } from '../../../../../redux/actions/projectsActions';
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
    const {
      dateRanges,
      dateRanges: { statFilter },
      data,
      currentUnitValue,
    } = this.props.projects;

    const { setCurrentUnitValue } = this.props;

    let content;

    if(!data) {
      content = <Loader />
    } else {
      content = (
        <div className="stat" dir={this.props.dir}>
          <div className="stat__inner">
            <Tabs defaultActiveTabIndex={1} height={10} tabsAddClassName='stat__tabs'>
              <Tab title="Total Money Invested">
                <StatTotal dateRanges={dateRanges} item={data} />
              </Tab>
              <Tab title="Units Invested">
                <StatUnit
                  dateRanges={dateRanges}
                  item={data}
                  setCurrentUnitValue={setCurrentUnitValue}
                  currentUnitValue={currentUnitValue}
                />
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
    projects: state.projects,
    // data: state.projects.data,
  }), { getProject, setCurrentUnitValue }
)(Main)
