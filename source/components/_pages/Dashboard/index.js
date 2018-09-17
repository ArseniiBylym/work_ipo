import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { getAllProjects } from '../../../redux/reducers/getProjects.reducer';
import { projectsSingle, home } from '../../../utils/routesBack'
import { connect } from 'react-redux';
import multiLang from '../../_HOC/lang.hoc';
import Loader from './partials/Loader';
import PageFooter from '../../PageFooter/PageFooter.index'
// import { home } from '../../../utils/routesBack'

class Dashboard extends Component {

  static propTypes = {
    dir: PropTypes.string,
    lang: PropTypes.string,
    getProjects: PropTypes.func,
    content: PropTypes.object
  }

  // state = {
  //   searchValue: ''
  // }

  // onSearchUpdate = (value) => {
  //   this.setState({
  //     searchValue: value
  //   })
  // }

	componentDidMount = () => {
    const {lang, getAllProjects} = this.props;
    const userType = window.localStorage.getItem('user-type');
    const projectType = userType === 'investor' ? 'purchasedprojects' : 'myprojects';

    const projectsSingle = `${userType}/${window.localStorage.getItem('user-id')}/${projectType}`

    getAllProjects(lang, projectsSingle)
  }

  renderPage() {
   const {dir, lang, content} = this.props;
   if (!content.pageContent) return null

   let pageContent;

    if (!content.pageContent) {
      pageContent = <Loader style={{position: 'fixed', top: "50%", left: "50%"}}/>
    } else {
      pageContent = (
        <div>
          <Header pageHeaderText={content.pageContent[0][lang]}/>
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
  }
}
const mapDispatchToProps = dispatch => {

  return{
    getAllProjects: (lang, projectsSingle) => (dispatch(getAllProjects(lang, projectsSingle))),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  multiLang(Dashboard)
)
