import React, { Component } from 'react';
import Logout from '../partials/Logout';
import { Link } from 'react-router-dom';
import './sidebar.styl';

class Sidebar extends Component {

  render() {
    const links = [
      {
        link: '/dash',
        text: 'My Projects',
        addedClass: 'projects',
      },
      {
        link: '/dash/profile',
        text: 'My Profile',
        addedClass: 'profile',
      },
      {
        link: '/dash/settings',
        text: 'Settings',
        addedClass: 'settings',
      },
      {
        link: '/dash/terms',
        text: 'Terms of service',
        addedClass: 'terms',
      },
      {
        link: '/dash/help',
        text: 'Help',
        addedClass: 'help',
      },
    ];

    const listItemClass = 'sidebar__list-item';
    const linkClass = 'sidebar__list-link';

    const linksDom = links.map( item => {
      return (
        <li className={`${listItemClass} ${'sidebar__list-' + item.addedClass}`} key={item.text}>
          <Link to={item.link} className={linkClass}>
            {item.text}
          </Link>
        </li>
      )
    })

    linksDom.push(
      <li className={listItemClass + ' sidebar__list-logout'} key='logout'>
        <Logout className={linkClass} />
      </li>
    )

    return (
      <aside className="sidebar">
        <ul className="sidebar__list">
          {linksDom}
        </ul>
      </aside>
    );
  }

}

export default Sidebar;
