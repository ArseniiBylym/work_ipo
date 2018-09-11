
import React, { Component } from 'react';
import Investor from './ProjectGridInvestor';
import Entrepreneur from './ProjectsGridEnterpreneur';
import Loader from './Loader';
import ProjectItem from './ProjectItem';
import { getPageContent, resetPageContent } from '../../../../redux/reducers/pageContent.reducer';
import { removeProjectFromRedux } from '../../../../redux/reducers/pageContent.reducer';
import { connect } from 'react-redux';
import multilang from '../../../_HOC/lang.hoc'
import config from '../../../../utils/config';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/routesBack'
import {history} from '../../../../history'

class ProjectsGrid extends Component {

  state = {
    projects: null
  }


  componentDidMount() {
    const { getPageContent, lang, requestUrl, investor, content, itemsFromProps } = this.props;

// debugger
    if(!investor) {
      this.setState({
        projects: [
          ...itemsFromProps
        ]
      })
      return;
    }

    // const userId = window.localStorage.getItem('user-id');
    // this.props.getAllProjects(lang, `investor/${userId}/${this.props.projectTypeRequest}`)
    // getPageContent(lang, requestUrl);
  }


  // componentDidUpdate(prevProps) {
  //   const { getPageContent, lang, requestUrl, investor } = this.props;
  //   // DON'T FORGET ABOUT THIS
  //   if(prevProps.requestUrl === requestUrl) {
  //     return;
  //   }

  //   if(!investor) {
  //     return;
  //   }

  //   const userId = window.localStorage.getItem('user-id');
  //   this.props.getAllProjects(lang, `investor/${userId}/${this.props.projectTypeRequest}`)
  // }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   if (this.state == nextState) return false 
  // }



  deleteProject = (projectId, index) => {
    // debugger
    const { lang, requestUrl, getPageContent, investor } = this.props;
    console.log(projectId)
    const userType = window.localStorage.getItem('user-type')
    const userId = window.localStorage.getItem('user-id');

    const changeCurrentState = () => {
      console.log(this.state)

      const newState = this.state.projects.filter((item, i) => {
        // if(projectId == item.id) {return null}
       return projectId != item.id
        // return item
      })
      this.setState({
        projects: [
          ...newState
        ]
      })
    }

    if (userType == 'enterpreneur') {
      axios({
        method: `delete`,
          url: `${BASE_URL}/enterpreneur/${userId}/projects/${projectId}`,
           headers: {
            token: window.localStorage.getItem('user-token'),
            'language': 'en'
          }
      })
      .then(function (response) {
          console.log(response);
          changeCurrentState()
        })
        .catch(function (error) {
          console.log(error);
        });

    } else {
        axios.delete(`${config.domain}/${requestUrl}/${projectId}`)
        .then( res => {
          if(investor) {
            getPageContent(lang, requestUrl);
          } else {
            this.props.getProjects();
          }
        });
    }
  }


  render() {
    console.log(this.state)
    let { content, projectType, lang, itemsFromProps, investor, staticTitles } = this.props;
    let itemsList = null;
    const {dir} = this.props

    if(!this.state.projects) {
      itemsList = <Loader/>
    } else if(this.state.projects.length === 0) {
      itemsList = <div>Projects was not found</div>
    } else {
      itemsList = this.state.projects.map( (item, index) => {
        return (
          <ProjectItem
            index={index}
            item={item}
            key={index}
            titles={staticTitles}
            investor={investor}
            deleteProject={this.deleteProject}
          />
        )
      })
    }

    // if(!itemsFromProps) {
    //   itemsList = <Loader/>
    // } else if(itemsFromProps.length === 0) {
    //   itemsList = <div>Projects was not found</div>
    // } else {
    //   itemsList = this.itemsFromProps.map( item => {
    //     return (
    //       <ProjectItem
    //         item={item}
    //         key={item.id}
    //         titles={staticTitles}
    //         investor={investor}
    //         deleteProject={this.deleteProject}
    //       />
    //     )
    //   })
    // }

    return (
      <div className="projects-grid-wrap" dir={dir}>
      <div className={`projects-grid projects-grid__${this.props.itemsInRow}`}>
        {itemsList}
      </div>
    </div>
    );
  }

}

export default multilang(ProjectsGrid);