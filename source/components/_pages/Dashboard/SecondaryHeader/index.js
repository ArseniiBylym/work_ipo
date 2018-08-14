import React, { Component } from 'react';
import { Crumbs, Controls } from './partials';
import './secondary-header.styl';

class SecondaryHeader extends Component {

  render() {
    const { crumbs = true, controls = false } = this.props;

    return (
      <div className="secondary-header">
        { crumbs && <Crumbs />}
        { controls && <Controls />}
      </div>
    );
  }

}

export default SecondaryHeader;
