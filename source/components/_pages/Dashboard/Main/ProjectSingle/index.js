import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader/index';
import ProjectSingleItem from './ProjectSingle.jsx';
import multilang from '../../../../_HOC/lang.hoc'
import { getPageContent, resetPageContent } from '../../../../../redux/reducers/pageContent.reducer';
import { connect } from 'react-redux';
import Loader from '../../partials/Loader';
import './project.styl';

class ProjectSingle extends Component {

  componentDidMount() {
    const { getPageContent, lang, id = 1 } = this.props
    const { projectId, projectType = 'project', userType } = this.props.match.params;

    getPageContent(lang, `${userType}/${id}/${projectType}/${projectId}`);
  }

  componentWillUnmount() {
    this.props.resetPageContent();
  }

  render() {
    const { project } = this.props.match.params;
    const { content, lang } = this.props;
    let pageContent;

    if(!content.pageContent) {
      pageContent = <Loader />
    } else {
      pageContent = (
        <div className="">
          <SecondaryHeader statisticLink={false} button={true} projectId={project} />
          <main className="dash-inner">
            <div className="project">
              <ProjectSingleItem {...this.props} projectId={project}/>
            </div>
          </main>
        </div>)
    }

    return (
      <React.Fragment>
        {pageContent}
      </React.Fragment>
    );
  }

}

export default connect(
  state => {
    return {
      content: state.pageContent,
      userType: 'investor'
    }
  }, { getPageContent, resetPageContent }
)(multilang(ProjectSingle));
