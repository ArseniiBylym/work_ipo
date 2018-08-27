import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStatFilter } from '../../../../redux/actions/headerActions';

class StaticticControls extends Component {

  selectChangeHandler = e => {
    this.props.changeStatFilter(e.target.value);
  }

  render() {
    const { statFilter } = this.props;

    return (
      <div className="select__wrap stat__select-wrap">
        <span className="stat__select-title">
          Time
        </span>
        <select
          value={statFilter.value}
          onChange={this.selectChangeHandler}
          name="stat-control"
          className="select"
        >
          {statFilter.options.map( option => {
            return <option value={option.value} key={option.value}>{option.title}</option>
          })}
        </select>
      </div>
    );
  }

}

export default connect(
  state => {
    return {
      statFilter: state.header.statFilter
    }
  }, { changeStatFilter }
)(StaticticControls);
