import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import { getAllProjects } from '../../../../../redux/reducers/getProjects.reducer';
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
    getAllProjects(lang, projects)
    this.getProjects();
	}

  getProjects = () => {
    const {lang, getAllProjects} = this.props
    getAllProjects(lang, projects)
  }

  renderPage (){

    const {dir, lang, content, userId } = this.props;
    let staticTitles;

    if (!content.company_projects) {
      return null
    }

    staticTitles = content.pageContent[1][lang];

    return(
      <div dir={dir}>
        <SecondaryHeader controls={true} button={true} createNewButton={true}/>
        <main className="dash-inner">
          <ProjectsGrid
            items={content.company_projects.projects}
            itemsInRow={2}
            requestUrl={`enterpreneur/${userId}/projects`}
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

export default connect(mapStateToProps, { getAllProjects })(
  multiLang(Projects)
)
