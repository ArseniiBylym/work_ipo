import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader/index';
import ProjectSingleItem from './ProjectSingle.jsx';
import multilang from '../../../../_HOC/lang.hoc'
import { getPageContent } from '../../../../../redux/reducers/pageContent.reducer';
import { connect } from 'react-redux';
import Loader from '../../partials/Loader';

import foto1 from './img/foto-1.png';
import foto2 from './img/foto-2.png';
import foto3 from './img/foto-3.png';
import './project.styl';

const item = {
  members: [
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto1
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto2,
    },
    {
      name: 'dasdas',
      post: 'eqwxeqw',
      src: foto3,
    },
  ]
}

class ProjectSingle extends Component {ё

  componentDidMount() {
    const { getPageContent, lang, id = 1, projectId = '6' } = this.props

    getPageContent(lang, `investor/${id}/purchasedprojects/${projectId}`);
  }

  render() {
    const { project } = this.props.match.params;
    const { content, lang } = this.props;
    let pageContent;
    // console.log('projectId', project)

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
      content: state.pageContent
    }
  }, { getPageContent }
)(multilang(ProjectSingle));
