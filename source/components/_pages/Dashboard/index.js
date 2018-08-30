import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { getAllProjects } from '../../../redux/reducers/getProjects.reducer';
import { projects } from '../../../utils/routesBack'
import { connect } from 'react-redux';
import multiLang from '../../_HOC/lang.hoc';
import Loader from './partials/Loader';

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
    getAllProjects(lang, projects)
	}

  renderPage() {
   const {dir, lang, content} = this.props;

   let pageContent;

    if (!content.company_projects) {
      pageContent = <Loader style={{position: 'fixed', top: "50%", left: "50%"}}/>
    } else {
      pageContent = (
        <div>
          <Header />
          <Sidebar />
          <Main />
        </div>
      )
    }

    return(
      <React.Fragment>
        {pageContent}
      </React.Fragment>
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
