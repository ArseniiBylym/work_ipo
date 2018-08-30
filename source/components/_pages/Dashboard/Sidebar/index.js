// import React, { Component, Fragment } from 'react';
// import Logout from '../partials/Logout';
// import { Link, NavLink } from 'react-router-dom';
// import './sidebar.styl';
// import LogOut from '../Main/LogOut/LogOut'



// class Sidebar extends Component {

//   state = {
//     isLogoutBackdropShow: false
//   }

//   showLogoutBackdrop = () => {
   
//     this.setState({
//       isLogoutBackdropShow: true
//     })
//   }

//   componentDidUpdate = () => {
//     console.log('-----------------')
//     console.log(this.props)
//     console.log('------------------')
//     console.log(this.state)
//   }

//   hideLogoutBackdrop = () => {
//     this.setState({
//       isLogoutBackdropShow: false
//     })
//   }

//   renderPage() {
   

//     const links = [
//       {
//         link: '/dash/projects',
//         text: 'My Projects',
//         addedClass: 'projects',
//       },
//       {
//         link: '/dash/profile/',
//         text: 'My Profile',
//         addedClass: 'profile',
//       },
//       {
//         link: '/dash/settings',
//         text: 'Settings',
//         addedClass: 'settings',
//       },
//       {
//         link: '/dash/terms',
//         text: 'Terms of service',
//         addedClass: 'terms',
//       },
//       {
//         link: '/dash/help',
//         text: 'Help',
//         addedClass: 'help',
//       },
//     ];

//     const listItemClass = 'sidebar__list-item';
//     const linkClass = 'sidebar__list-link';

//     const linksDom = links.map( item => {
//       return (
//         <li className={`${listItemClass} ${'sidebar__list-' + item.addedClass}`} key={item.text}>
//           <NavLink to={item.link} className={linkClass}>
//             {/*{item.image}*/}
//             {item.text}
//           </NavLink>
//         </li>
//       )
//     })

//     linksDom.push(
//       <li className={listItemClass + ' sidebar__list-logout'} key='logout'>
       
//         <Logout className={linkClass} logout={this.showLogoutBackdrop} 
//                 click={this.showLogoutBackdrop} 
//                 text='LOG OUT'
//                 />
//       </li>
//     )

//     let logout = this.state.isLogoutBackdropShow && <LogOut click={this.hideLogoutBackdrop} 
//                                                             text={`SOME TEXT`} 
//                                                             toOutQuestion={`ANOTHER SOME TEXT`}/>

//     return (
//       <React.Fragment>
//         {logout}
//       <aside className="sidebar">
//         <ul className="sidebar__list">
//           {linksDom}
//         </ul>
//       </aside>
//       </React.Fragment>
//     );
//   }
//   render() {
//     return(
//       <Fragment>
//       {this.renderPage()}
//       </Fragment>
//     )
//   }

// }


// export default Sidebar




import React, { Component, Fragment } from 'react';
import Logout from '../partials/Logout';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.styl';
import LogOut from '../Main/LogOut/LogOut'
import { connect } from 'react-redux';
import multiLang from '../../../_HOC/lang.hoc'



class Sidebar extends Component {

  state = {
    isLogoutBackdropShow: false
  }

  componentDidUpdate = () => {
    console.log('-----------------')
    console.log(this.props)
    console.log('------------------')
    console.log(this.state)
  }

  showLogoutBackdrop = () => {
   
    this.setState({
      isLogoutBackdropShow: true
    })
  }

  hideLogoutBackdrop = () => {
    this.setState({
      isLogoutBackdropShow: false
    })
  }

  renderPage() {
    const {content, lang} = this.props

    if(!content.pageContent) return null
      console.log(content)
      console.log(lang)

      let projectsText = content.pageContent[0][lang].my_projects;
      console.log(projectsText)

    const links = [
      {
        link: '/dash/projects',
        text: content.pageContent[0][lang].my_projects,
        text: 'My Projects',
        addedClass: 'projects',
      },
      {
        link: '/dash/profile/',
        text: content.pageContent[0][lang].my_profile,
        text: 'My Profile',
        addedClass: 'profile',
      },
      {
        link: '/dash/settings',
        text: content.pageContent[0][lang].settings,
        text: 'Settings',
        addedClass: 'settings',
      },
      {
        link: '/dash/terms',
        text: content.pageContent[0][lang].terms,
        text: 'Terms of service',
        addedClass: 'terms',
      },
      {
        link: '/dash/help',
        text: content.pageContent[0][lang].help,
        text: 'Help',
        addedClass: 'help',
      },
    ];

    const listItemClass = 'sidebar__list-item';
    const linkClass = 'sidebar__list-link';

    const linksDom = links.map( item => {
      return (
        <li className={`${listItemClass} ${'sidebar__list-' + item.addedClass}`} key={item.text}>
          <NavLink to={item.link} className={linkClass}>
            {/*{item.image}*/}
            {item.text}
          </NavLink>
        </li>
      )
    })

    linksDom.push(
      <li className={listItemClass + ' sidebar__list-logout'} key='logout'>
       
        <Logout className={linkClass} logout={this.showLogoutBackdrop} 
                click={this.showLogoutBackdrop} 
                text={content.pageContent[0][lang].log_out}
                />
      </li>
    )

    let logout = this.state.isLogoutBackdropShow && <LogOut click={this.hideLogoutBackdrop} 
                                                            text={content.pageContent[0][lang].log_out_btn} 
                                                            toOutQuestion={content.pageContent[0][lang].log_out_message}/>

    return (
      <React.Fragment>
        {logout}
      <aside className="sidebar">
        <ul className="sidebar__list">
          {linksDom}
        </ul>
      </aside>
      </React.Fragment>
    );
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

export default connect(mapStateToProps, null)(
  multiLang(Sidebar)
  );
