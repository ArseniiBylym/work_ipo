import React, { Component } from 'react';
import { connect } from 'react-redux';
import multiLang from '../../../_HOC/lang.hoc'

class Search extends Component {

  state = {
    value: ''
  }

  changeInput = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  } 

  render() {
    console.log(this.state.value)
    const { dir } = this.props
    return (
      <div className="dash-header__search" dir={dir}>
        <input
          className="form-control__field"
          type="text"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.changeInput}
        />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    projects: state.allProjects.company_projects.projects
  }
}

export default connect(mapStateToProps, null)(
  multiLang(Search)
);
