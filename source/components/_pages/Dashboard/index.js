import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { getAllProjects } from '../../../redux/reducers/getProjects.reducer';
import { getPageContent } from '../../../redux/reducers/pageContent.reducer';
import { projectsSingle, home } from '../../../utils/routesBack'
import { connect } from 'react-redux';
import multiLang from '../../_HOC/lang.hoc';
import Loader from './partials/Loader';

class Dashboard extends Component {

  static propTypes = {
    dir: PropTypes.string,
    lang: PropTypes.string,
    getProjects: PropTypes.func,
    content: PropTypes.object
  }

	componentDidMount = () => {
    const {lang, getAllProjects, getPageContent} = this.props
    getAllProjects(lang, projectsSingle)
    getPageContent(lang, home)
  }

  renderPage() {
   const {dir, lang, content, pageContentHeader} = this.props;
   console.log(pageContentHeader)

   let pageContent;

    if (!content.company_projects) {
      pageContent = <Loader style={{position: 'fixed', top: "50%", left: "50%"}}/>
    } else {
      pageContent = (
        <div>
          <Header pageHeaderText={pageContentHeader.pageContent[0][lang]}/>
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
    content: state.allProjects,
    pageContentHeader: state.pageContent
  }
}
const mapDispatchToProps = dispatch => {
  return{
    getAllProjects: (lang, projectsSingle) => (dispatch(getAllProjects(lang, projectsSingle))),
    getPageContent: (lang, home) => (dispatch(getPageContent(lang, home)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  multiLang(Dashboard)
)
