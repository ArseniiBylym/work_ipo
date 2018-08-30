import React, { Component } from 'react';
import Loader from './Loader';
import ProjectItem from './ProjectItem';
import { getPageContent, resetPageContent } from '../../../../redux/reducers/pageContent.reducer';
import { connect } from 'react-redux';
import multilang from '../../../_HOC/lang.hoc'

class ProjectsGrid extends Component {

  componentDidMount() {
    const { getPageContent, lang, requestUrl } = this.props;

    if(!requestUrl) {
      return;
    }

    getPageContent(lang, requestUrl);
  }

  componentDidUpdate(prevProps) {
    const { getPageContent, lang, requestUrl } = this.props;

    // DON'T FORGET ABOUT THIS
    if(prevProps.requestUrl === requestUrl) {
      return;
    }

    if(!requestUrl) {
      return;
    }
    getPageContent(lang, requestUrl);
  }

  componentWillUnmount() {
    this.props.resetPageContent();
  }

  render() {
    let { content, projectType, lang, items, investor, staticTitles } = this.props;
    let itemsList;

    if(investor) {
      if(!content.pageContent) {
        return <Loader/>;
      }
      // waiting for data
      if(!content.data) {
        return <Loader />
      }

      items = content.data[projectType];

      staticTitles = content.pageContent[1][lang];
    }

    if(!items) {
      itemsList = <Loader/>
    } else if(items.length === 0) {
      itemsList = <div>Projects was not found</div>
    } else {
      itemsList = items.map( item => {
        return (
          <ProjectItem item={item} key={item.id} titles={staticTitles} investor={investor}/>
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
      content: state.pageContent
    }
  }, { getPageContent, resetPageContent }
)(multilang(ProjectsGrid));
