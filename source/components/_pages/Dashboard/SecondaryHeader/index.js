import React, { Component } from 'react';
import { Crumbs, Controls } from './partials';
import StatisticLink from '../partials/StaticticLink';
import StaticticControls from './StaticticControls';
import './secondary-header.styl';
import CreateNewProjectButton from '../partials/CreateNewProjectButton';

class SecondaryHeader extends Component {

  render() {
    const {
      crumbs = true,
      button = false,
      controls = false,
      statisticLink = false,
      statisticControls = false,
      projectId,
     } = this.props;

    return (
      <div className="secondary-header">
        { crumbs && <Crumbs />}
        { controls && <Controls />}
        { statisticLink && <StatisticLink projectId={this.props.projectId}/>}
        { statisticControls && <StaticticControls />}
        { button && <div className='CreateNewProjectButton__wrapper'><CreateNewProjectButton /></div> }
      </div>
    );
  }

}

export default SecondaryHeader;
