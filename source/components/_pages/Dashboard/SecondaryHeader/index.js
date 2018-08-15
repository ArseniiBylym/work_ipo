import React, { Component } from 'react';
import { Crumbs, Controls } from './partials';
import StatisticLink from '../partials/StaticticLink';
import './secondary-header.styl';

class SecondaryHeader extends Component {

  render() {
    const {
      crumbs = true,
      controls = false,
      statisticLink = false,
      projectId,
     } = this.props;

    return (
      <div className="secondary-header">
        { crumbs && <Crumbs />}
        { controls && <Controls />}
        { statisticLink && <StatisticLink projectId={this.props.projectId}/>}
      </div>
    );
  }

}

export default SecondaryHeader;
