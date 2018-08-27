import React, { Component } from 'react';
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
import { getProjects } from '../../../../../redux/actions/projectsActions';
import { connect } from 'react-redux';
import './project.styl';

class Projects extends Component {

  componentDidMount() {
    this.props.getProjects();
  }

  createItemsList = () => {

  }

  render() {
    const { items } = this.props;

    return (
      <div>
        <SecondaryHeader controls={true} button={true}/>
        <main className="dash-inner">
          <Tabs defaultActiveTabIndex={0} height={30} tabsAddClassName={'projects-tabs'} >
              <ProjectsGrid items={items} itemsInRow={3}/>
          </Tabs>
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
)(Projects);


// <Tab title='Purchased Projects'>
//               <ProjectsGrid items={items} itemsInRow={3}/>
//             </Tab>
//             <Tab title='Subscribed Projects'>
//               <ProjectsGrid items={items} itemsInRow={2}/>
//             </Tab>