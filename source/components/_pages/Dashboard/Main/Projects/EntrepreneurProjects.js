import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import { getAllProjects } from '../../../../../redux/reducers/getProjects.reducer';
import { projects } from '../../../../../utils/routesBack'
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

  renderPage (){

    const {dir, lang, content} = this.props;
    let staticTitles;

    if (!content.company_projects) {
      return null
    }

    staticTitles = content.pageContent[1][lang];

    return(
      <div>
        <SecondaryHeader controls={true} button={true} />
        <main className="dash-inner">
          <ProjectsGrid
            items={content.company_projects.projects}
            itemsInRow={2}
            staticTitles={staticTitles}
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
    content: state.allProjects
  }
}

export default connect(mapStateToProps, null)(
  multiLang(Projects)
)
