import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import SecondaryHeader from '../../SecondaryHeader';
import ProjectItem from '../../partials/ProjectItem';
import ProjectsGrid from '../../partials/ProjectsGrid';
import Tabs from '../../../../Tabs/Tabs.index';
import Tab from '../../../../Tabs/Tabs.item';
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

  // componentDidMount() {

  //   const {lang, getAllProjects} = this.props
  //   getAllProjects(lang, projects)
  // }

  createItemsList = () => {

  }

  

  renderPage (){

    const {dir, lang, content} = this.props

    if (!content.company_projects) {
      return null
    }
   
    
    return(
      <div>
        <SecondaryHeader controls={true} button={true} dir={dir}/>
        <main className="dash-inner">
          <Tabs defaultActiveTabIndex={0} height={30} tabsAddClassName={'projects-tabs'} >
              <ProjectsGrid items={content.company_projects.projects} itemsInRow={2}/>
          </Tabs>
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
// const mapDispatchToProps = {getAllProjects}

export default connect(mapStateToProps, null)(
  multiLang(Projects)
)
















// import React, { Component } from 'react';
// import SecondaryHeader from '../../SecondaryHeader';
// import ProjectItem from '../../partials/ProjectItem';
// import ProjectsGrid from '../../partials/ProjectsGrid';
// import Tabs from '../../../../Tabs/Tabs.index';
// import Tab from '../../../../Tabs/Tabs.item';
// import { getProjects } from '../../../../../redux/actions/projectsActions';
// import { connect } from 'react-redux';
// import './project.styl';

// class Projects extends Component {

//   componentDidMount() {
//     this.props.getProjects();
//   }

//   createItemsList = () => {

//   }

//   render() {
//     const { items } = this.props;
//     console.log(items)

//     return (
//       <div>
//         <SecondaryHeader controls={true} button={true}/>
//         <main className="dash-inner">
//           <Tabs defaultActiveTabIndex={0} height={30} tabsAddClassName={'projects-tabs'} >
//               <ProjectsGrid items={items} itemsInRow={2}/>
//           </Tabs>
//         </main>
//       </div>
//     );
//   }

// }

// export default connect(
//   state => {
//     return {
//       items: state.projects.items,
//     }
//   }, { getProjects }
// )(Projects);
