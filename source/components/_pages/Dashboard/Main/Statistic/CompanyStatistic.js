import React, { Component } from 'react';
import Stat from './Stat';
import { connect } from 'react-redux';
import { getProject } from '../../../../../redux/actions/projectsActions';
import SecondaryHeader from '../../SecondaryHeader';
import Loader from '../../partials/Loader';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
// import StatTotal from './StatTotal';
// import StatUnit from './StatUnit';
import './stat.styl';

import m from '../../../../_HOC/lang.hoc'

class CompanyStatistic extends Component {

  componentDidMount() {
    this.props.getProject('company');
  }

  render() {
    const {
      dateRanges,
      dateRanges: { statFilter },
      data,
      currentUnitValue,
    } = this.props.projects;

    let content;

    if(!data) {
      content = <Loader />
    } else {
      content = (
        <div className="stat" dir={this.props.dir}>
          <div className="stat__inner">
            <Tabs defaultActiveTabIndex={1} height={10} tabsAddClassName='stat__tabs'>
              <Tab title="Visits">
                <Stat
                  dateRanges={dateRanges}
                  item={data}
                />
              </Tab>
              <Tab title="Already Collected Money">
                <Stat
                  // dateRanges={dateRanges}
                  // item={data}
                  // setCurrentUnitValue={setCurrentUnitValue}
                  // currentUnitValue={currentUnitValue}
                  {...this.props}
                  {...this.props.project}
                />
              </Tab>
              <Tab title="Subscribers">
                <Stat
                  // dateRanges={dateRanges}
                  // item={data}
                  // setCurrentUnitValue={setCurrentUnitValue}
                  // currentUnitValue={currentUnitValue}
                  {...this.props}
                  {...this.props.project}
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
  }), { getProject }
)(CompanyStatistic)
