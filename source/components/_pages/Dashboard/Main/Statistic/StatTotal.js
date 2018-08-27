import React, { Component } from 'react';
import Stat from './Stat';

class StatTotal extends Component {

  render() {
    return (
      <div>
        <div className="stat__total-header">
          TOTAL (FOR SELECTED PERIOD) = 376 000 ILS
        </div>
        <div className="stat__unit-header-title">
          Money Invested
        </div>
          <Stat
            margin={{
              left: 0,
              top: 0,
              bottom: 20,
              right: 0,
            }}
            width={1400}
            height={544}
            {...this.props}
          />
      </div>
    );
  }

}

export default StatTotal;
