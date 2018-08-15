import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StaticticLink extends Component {

  render() {
    return (
      <div className="statistic-link-wrap">
        <Link to={`/dash/projects/${this.props.projectId}/statistic`} className='statistic-link'>
          Statistic
        </Link>
      </div>
    );
  }

}

export default StaticticLink;
