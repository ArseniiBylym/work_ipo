import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Crumbs extends Component {

  parsePath = () => {
    const fullPath = this.props.location.pathname;
    const splittedPath = fullPath.split('/');
    let resultPathes = [];

    splittedPath.forEach( path => {
      // exclude unnecassary pathes and create others
      path && path !== 'dash' && resultPathes.push( detectPath(path) );
    })

    return resultPathes;

    function detectPath(path) {
      const linkNames = {
        'projects': 'My Projects',
        'purchase': 'Purchase Projects',
        'profile': 'My Profile',
        'settings': 'Settings',
      };

      const resLink = {
        text: linkNames[path],
        path: createPath(path),
      };

      return resLink;

      function createPath(path) {
        const currentPathStack = resultPathes[ resultPathes.length - 1] && resultPathes[ resultPathes.length - 1].path || '/dash';

        return `${currentPathStack}/${path}`;
      }
    }
  }

  getCrumbs = () => {
    const links = this.parsePath();
    const { linkAsAnchor } = this.props;
    // for testing
    const UsedLink = linkAsAnchor ? createAnchor : Link;

    return links.map( link => {
      if(link.text) {
        return (
          <li className='crumbs__item' key={link.text + link.path} >
            <UsedLink to={link.path} className="crumbs__link">
              {link.text}
            </UsedLink>
          </li>
        )
      } else {
        return null;
      }
    })

    function createAnchor() {
      return <a/>
    }
  }

  render() {
    return (
      <div className="crumbs">
        <ul className="crumbs__list">
          {this.getCrumbs()}
        </ul>
      </div>
    );
  }

}

export { Crumbs }

export default withRouter(Crumbs);