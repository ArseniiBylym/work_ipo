import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
import './project.styl';

class Projects extends Component {

  render() {
    const id = 1;

    return (
      <div>
        <SecondaryHeader controls={true} />
        <main className="dash-inner">
          <Tabs defaultActiveTabIndex={0} height={30} tabsAddClassName={'projects-tabs'} >
            <Tab title='Purchased Projects'>
              <ProjectsGrid
                itemsInRow={3}
                requestUrl={`investor/${id}/purchasedprojects/`}
                projectType='purchased_projects'
                investor
              />
            </Tab>
            <Tab title='Subscribed Projects'>
              <ProjectsGrid
                itemsInRow={2}
                requestUrl={`investor/${id}/subscribedProjects/`}
                projectType='subscribed_projects'
                investor
              />
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }

}

export default Projects;
