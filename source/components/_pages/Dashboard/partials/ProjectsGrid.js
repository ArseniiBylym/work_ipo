import React, { Component } from 'react';
import Loader from './Loader';
import ProjectItem from './ProjectItem';

class ProjectsGrid extends Component {

  render() {
    const { items } = this.props;
    let itemsList;

    if(!items) {
      itemsList = <Loader/>
    } else if(items.length === 0) {
      itemsList = <div>Projects was not found</div>
    } else {
      itemsList = items.map( item => {
        return (
          <ProjectItem item={item} key={item.id}/>
        )
      })
    }

    return (
      <div className="project-grid-wrap">
        <div className={`project-grid project-grid__${this.props.itemsInRow}`}>
          {itemsList}
        </div>
      </div>
    );
  }

}

export default ProjectsGrid;
