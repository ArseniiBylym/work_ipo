import React, { Component } from 'react';
import { AxisLeft } from '@vx/axis';

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

    const { units } = this.props;
    // let label;
    //
    // if(units) {
    //   label = 'Units Invested';
    // } else {
    //   label = 'Money Invested'
    // }

    return (
      <AxisLeft
        tickValues={this.props.values}
        left={10}
        // label={label}
        // labelOffset={0}
        tickFormat={val => {
          return val
        }}
        tickClassName='stat__axis-value'
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
