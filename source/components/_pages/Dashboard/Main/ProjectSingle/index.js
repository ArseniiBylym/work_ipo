import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader/index';
import ProjectSingleItem from './ProjectSingle.jsx';
import foto1 from './img/foto-1.png';
import foto2 from './img/foto-2.png';
import foto3 from './img/foto-3.png';
import './project.styl';
import { connect } from 'react-redux';

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

class ProjectSingle extends Component {

  render() {
    const { project } = this.props.match.params;
    console.log(this.props.items)
    let projectName = null 
    for (let key in this.props.items) {

    }

    return (
      <div className="">
        <SecondaryHeader statisticLink={false} button={true} projectId={project} />
        <main className="dash-inner">
          <div className="project">
            <ProjectSingleItem {...item} projectId={project}/>
          </div>
        </main>
      </div>
    );
  }

}

export default connect(
  state => {
    return {
      items: state.projects.items,
    }
  }, { getProjects }
)(ProjectSingle);
