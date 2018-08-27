import React, { Component } from 'react';
import { Crumbs, Controls } from './partials';
import StatisticLink from '../partials/StaticticLink';
import StaticticControls from './StaticticControls';
import './secondary-header.styl';

class SecondaryHeader extends Component {

  render() {
    const {
      crumbs = true,
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
      </div>
    );
  }

}

export default SecondaryHeader;
