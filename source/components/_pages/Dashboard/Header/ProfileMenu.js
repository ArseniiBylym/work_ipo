import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleHeaderMenu } from '../../../../redux/actions/headerActions';
import { withRouter } from 'react-router-dom';
import multiLang from '../../../_HOC/lang.hoc'
import { Link } from 'react-router-dom';
import Logout from '../partials/Logout';

class ProfileMenu extends Component {

  toggleMenu = () => {
    this.props.toggleHeaderMenu();
  }

  renderPage() {
    const  header  = this.props.header;
    const content = this.props.content;

    const isOpenClass = header ? 'open' : '';
    const linkClassName = 'dash-header__dropdown-link';

    const links = [
      {
        'link': '/dash/profile',
        text: 'My Profile',
      },
      {
        link: '/dash/settings',
        text: 'Settings',
      }
    ];

    const linksDom = links.map( item => {
      return (
        <li className="dash-header__dropdown-item" key={item.link}>
          <Link to={item.link} className={linkClassName}>
            {item.text}
          </Link>
        </li>
      )
    });

    linksDom.push(
      <li className="dash-header__dropdown-item" key="logout">
        <Logout className={linkClassName} />
      </li>
    )

    if(!content) return null
      console.log(content)

    return (
      <div className="dash-header__profile">
        <div className="dash-header__button" onClick={this.toggleMenu}>
        {content.company_projects.ceo_name}
          {/*Johndasdasdasda Dodasdu*/}
        
        </div>
        <div className={`dash-header__profile-dropdown ${isOpenClass}`}>
          <ul className="dash-header__dropdown-list">
            {linksDom}
          </ul>
        </div>
      </div>
    );
  }



render() {
  console.log(this.props)
  return(
    <React.Fragment>
    {this.renderPage()}
    </React.Fragment>
    )
}
}

const mapProps = state => ({
  header: state.header.isMenuOpened,
  content: state.allProjects
})

export default withRouter(
  connect(mapProps, { toggleHeaderMenu } )(ProfileMenu)
)



// import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
// import { toggleHeaderMenu } from '../../../../redux/actions/headerActions';
// import { withRouter } from 'react-router-dom';
// import multiLang from '../../../_HOC/lang.hoc'
// import { Link } from 'react-router-dom';
// import Logout from '../partials/Logout';

// class ProfileMenu extends Component {

//     toggleMenu = () => {
//       this.props.toggleHeaderMenu();
//     }

//   renderPage() {

//     const { header } = this.props.header;
//     const {content} = this.props.content;
//     console.log(content)
//     const isOpenClass = header ? 'open' : '';
//     const linkClassName = 'dash-header__dropdown-link';

//     const links = [
//       {
//         'link': '/dash/profile',
//         text: 'My Profile',
//       },
//       {
//         link: '/dash/settings',
//         text: 'Settings',
//       }
//     ];

//     const linksDom = links.map( item => {
//       return (
//         <li className="dash-header__dropdown-item" key={item.link}>
//           <Link to={item.link} className={linkClassName}>
//             {item.text}
//           </Link>
//         </li>
//       )
//     });

//     linksDom.push(
//       <li className="dash-header__dropdown-item" key="logout">
//         <Logout className={linkClassName} />
//       </li>
//     )
      
//       if (!content) {
//       return null
//     }
//       return(
//       <div className="dash-header__profile">
//         <div className="dash-header__button" onClick={this.toggleMenu}>
//           Johndasdasdasda Dodasdu
//         </div>
//         <div className={`dash-header__profile-dropdown ${isOpenClass}`}>
//           <ul className="dash-header__dropdown-list">
//             {linksDom}
//           </ul>
//         </div>
//       </div>
//         )
//     }

//   render() {
//     return (
//       <Fragment>
//         {this.renderPage()}
//       </Fragment>
      
//     );
//   }

// }

// const mapProps = state => ({
//   header: state.header.isMenuOpened,
//   content: state.allProjects
// })

// export default withRouter(
//   connect(mapProps, { toggleHeaderMenu } )(ProfileMenu)
// )
