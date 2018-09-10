import React, { Component } from 'react';
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
    
  }


  componentDidMount() {
    const { getPageContent, lang, requestUrl, investor, content } = this.props;

    if(!investor) {
      return;
    }

    const userId = window.localStorage.getItem('user-id');
    this.props.getAllProjects(lang, `investor/${userId}/${this.props.projectTypeRequest}`)
    // getPageContent(lang, requestUrl);
  }


  componentDidUpdate(prevProps) {
    const { getPageContent, lang, requestUrl, investor } = this.props;
    // DON'T FORGET ABOUT THIS
    if(prevProps.requestUrl === requestUrl) {
      return;
    }

    if(!investor) {
      return;
    }

    const userId = window.localStorage.getItem('user-id');
    this.props.getAllProjects(lang, `investor/${userId}/${this.props.projectTypeRequest}`)
  }


  // componentWillUnmount() {
  //   this.props.resetPageContent();
  // }


  deleteProject = projectId => {
    const { lang, requestUrl, getPageContent, investor } = this.props;
    console.log(projectId)
    const userType = window.localStorage.getItem('user-type')
    const userId = window.localStorage.getItem('user-id');

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

          const userType = window.localStorage.getItem('user-type')
          const userId = window.localStorage.getItem('user-id')
          
          setTimeout(()=> {
            history.replace(`dash/${userType}/${userId}/projects`)
          },500)

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
    let { content, projectType, lang, itemsFromProps, investor, staticTitles } = this.props;
    let itemsList = null;
    // let items = null;

    // if(investor) {
    //   if(!content.pageContent) {
    //     return <Loader/>;
    //   }
    //   // waiting for data
    //   if(!content.data) {
    //     return <Loader />
    //   }
      
    //   items = content.data[projectType];

    //   staticTitles = content.pageContent[1][lang];
    // }

    if(!itemsFromProps) {
      itemsList = <Loader/>
    } else if(itemsFromProps.length === 0) {
      itemsList = <div>Projects was not found</div>
    } else {
      itemsList = itemsFromProps.map( item => {
        return (
          <ProjectItem
            item={item}
            key={item.id}
            titles={staticTitles}
            investor={investor}
            deleteProject={this.deleteProject}
          />
        )
      })
    }

    return (
      <div className="projects-grid-wrap">
        <div className={`projects-grid projects-grid__${this.props.itemsInRow}`}>
          {itemsList}
        </div>
      </div>
    );
  }

}

export default connect(
  state => {
    return {
      content: state.allProjects,
    }
  }, { getPageContent, resetPageContent }
)(multilang(ProjectsGrid));
