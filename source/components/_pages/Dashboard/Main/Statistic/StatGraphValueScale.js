import React, { Component } from 'react';
import { AxisLeft, AxisBottom } from '@vx/axis';

class StatGraphValueScale extends Component {
  //
  // createAxisValues = () => {
  //   const { maxValue } = this.props;
  //   const rows = 5;
  //   const gradation = maxValue / rows;
  //   const gradationArray = new Array(rows + 1).fill().map( (item, i) => {
  //     return i * gradation;
  //   })
  //
  //   return gradationArray;
  // }

  render() {

    return (
      <AxisLeft
        tickValues={this.props.values}
        left={10}
        tickFormat={val => val}
        tickClassName='stat__axis-value'
        stroke='red'
        strokeWidth={0}
        hideTicks
        tickLabelProps={ val => ({
          fontSize: 14,
          fill: '#8B8B8B',
          fontWeight: 500
        })}
        {...this.props}
      />
    );
  }

}

export default StatGraphValueScale;
