import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleHeaderMenu } from '../../../../redux/actions/headerActions';
import { withRouter } from 'react-router-dom';
import multiLang from '../../../_HOC/lang.hoc'
import { Link } from 'react-router-dom';
import Logout from '../partials/Logout';
import multilang from '../../../_HOC/lang.hoc';
import LogOut from '../Main/LogOut/LogOut'

class ProfileMenu extends Component {

  state = {
    isMenuOpen: false,
    isLogoutBackdropShow: false

  }

  toggleMenu = () => {
    console.log('click')
    console.log(this.state)

    this.setState((prevState)=>{
      return{
        isMenuOpen: !prevState.isMenuOpen 
      }
    })

    this.props.toggleHeaderMenu();
  }


  componentDidUpdate = () => {
    console.log(this.state)
  }

  hideBackdrop = () => {
    this.setState({
      isMenuOpen: false
    })
    this.props.toggleHeaderMenu();
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

    const { content, lang, userType, userId, dir} = this.props;
    const header  = this.props.header;

    const titles = content.pageContent[0][lang];

    const isOpenClass = header ? 'open' : '';
    const linkClassName = 'dash-header__dropdown-link';

    const links = [
      {
        link: `/dash/${userType}/${userId}/profile`,
        text: titles['my_profile'],
      },
      {
        link: `/dash/${userType}/${userId}/settings`,
        text: titles['settings'],
      }
    ];

    const linksDom = links.map( item => {
      return (
        <li className="dash-header__dropdown-item" key={item.link}>
          <Link to={item.link} className={linkClassName} onClick={this.hideBackdrop}>
            {item.text}
          </Link>
        </li>
      )
    });

    linksDom.push(
      <li className="dash-header__dropdown-item" key="logout" onClick={this.hideBackdrop}>
        <Logout className={linkClassName} text={titles.log_out} logout={this.showLogoutBackdrop} click={this.showLogoutBackdrop}/>
      </li>
    )

    let backdrop = null
    if(this.state.isMenuOpen) {
      backdrop = <div className="dash-header_profile--backdrop" onClick={this.hideBackdrop}/> 
    }

    let logout = this.state.isLogoutBackdropShow && (
      <LogOut click={this.hideLogoutBackdrop}
        dir={dir}
        text={content.pageContent[0][lang].log_out_btn}
        toOutQuestion={content.pageContent[0][lang].log_out_message}
      />
    )

    // let logout = this.state.isLogoutBackdropShow && (
    //   <div>Hello</div>
    // )

    if(!content) {return null}

    return (
      <div className="dash-header__profile">
        {logout}
        {backdrop}
        <div className="dash-header__button" onClick={this.toggleMenu}>
        {content.company_projects.ceo_name}

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
  content: state.allProjects,
  userType: state.pageContent.userType,
  userId: state.pageContent.userId,
})

export default withRouter(
  connect(mapProps, { toggleHeaderMenu } )(
    multilang(ProfileMenu)
  )
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
