import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import { getAllProjects, clearProjects } from '../../../../../redux/reducers/getProjects.reducer';
import { projects } from '../../../../../utils/routesBack'
import { projectsSingle } from '../../../../../utils/routesBack'
import { connect } from 'react-redux';
import './project.styl';
import multiLang from '../../../../_HOC/lang.hoc'

class Projects extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    lang: PropTypes.string,
    // from connect
    getProjects: PropTypes.func,
    content: PropTypes.object
  }

	componentDidMount = () => {
    // debugger
		// // console.log(this.props)
    const {lang, getAllProjects} = this.props
    const projects = `enterpreneur/${window.localStorage.getItem('user-id')}/myprojects`
    getAllProjects(lang, projects)
    this.getProjects();
  }
  
  componentWillUnmount = () => {
    const { clearProjects } = this.props
    clearProjects()
    console.log('projects was cleared')
    console.log(this.props.content)
    setTimeout(()=> {
      console.log(this.props.content)
    }, 1000)
  }


  // componentDidUpdate =(prevProps, prevState) => {

  //   if

  //   const {lang, getAllProjects} = this.props
  //     const projects = `enterpreneur/${window.localStorage.getItem('user-id')}/myprojects`
  //   getAllProjects(lang, projects)
  // }

  getProjects = () => {
    const {lang, getAllProjects} = this.props
    const projects = `enterpreneur/${window.localStorage.getItem('user-id')}/myprojects`
    getAllProjects(lang, projects)
  }

  renderPage (){

    const {dir, lang, content} = this.props;
    const userId = window.localStorage.getItem('user-id')
    let staticTitles;

    if (!content.company_projects.projects.length != 0) {
      return null
    }
    
    staticTitles = content.pageContent[1][lang];

    const userType = window.localStorage.getItem('user-type')
    const secHeaderText = [content.pageContent[0][lang].my_projects]

    return(
      <div dir={dir}>
        <SecondaryHeader controls={true} button={true} createNewButton={true}  text={secHeaderText} userType={userType}/>
        <main className="dash-inner">
          <ProjectsGrid
            items={content.company_projects.projects}
            itemsInRow={2}
            requestUrl={`enterpreneur/${userId}/myprojects`}
            staticTitles={staticTitles}
            getProjects={this.getProjects}
          />
        </main>
      </div>

    )
  }

  render() {
    return(
      <Fragment>
        {this.renderPage()}
      </Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    content: state.allProjects,
    userId: state.pageContent.userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProjects: (lang, projects) => (dispatch(getAllProjects(lang, projects))),
    clearProjects: () => (dispatch(clearProjects()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  multiLang(Projects)
)
