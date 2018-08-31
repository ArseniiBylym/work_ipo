import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

import { getAllProjects } from '../../../redux/reducers/getProjects.reducer';
import { projectsSingle } from '../../../utils/routesBack'
import { connect } from 'react-redux';
import multiLang from '../../_HOC/lang.hoc'

class Dashboard extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    lang: PropTypes.string,
    // from connect
    getProjects: PropTypes.func,
    content: PropTypes.object
  }

	componentDidMount = () => {
		console.log(this.props)
    const {lang, getAllProjects} = this.props
    getAllProjects(lang, projectsSingle)
	}

  renderPage() {

   const {dir, lang, content} = this.props

    if (!content.company_projects) {
      return null
    }

    return(
      <div>
        <Header />
        <Sidebar />
        <Main />
      </div>
    )
  }

  render() {
    return (
      <Fragment>
      {this.renderPage()}
      </Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    content: state.allProjects
  }
}
const mapDispatchToProps = {getAllProjects}

export default connect(mapStateToProps, mapDispatchToProps)(
  multiLang(Dashboard)
)


// export default Dashboard;
