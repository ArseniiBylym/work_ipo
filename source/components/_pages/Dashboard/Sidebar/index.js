import React, { Component } from 'react';
import Logout from '../partials/Logout';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.styl';
import LogOut from '../Main/LogOut/LogOut'
// import {logoutSvg,  helpSvg,  termsSvg,  settingsSvg,  profileSvg,  projectsSvg} from './svgFunctions'
// import {profileSvg} from './svgFunctions'
// import profileSvg from './img/profile.svg'
// console.log(profileSvg)


class Sidebar extends Component {

  state = {
    isLogoutBackdropShow: false
  }

  showLogoutBackdrop = () => {
    // console.log('click')
    // e.preventDefault()
    this.setState({
      isLogoutBackdropShow: true
    })
  }

  hideLogoutBackdrop = () => {
    this.setState({
      isLogoutBackdropShow: false
    })
  }

  render() {
    const links = [
      {
        link: '/dash/projects',
        text: 'My Projects',
        addedClass: 'projects',
        image: projectsSvg()
      },
      {
        link: '/dash/profile/',
        text: 'My Profile',
        addedClass: 'profile',
        image: profileSvg()
      },
      {
        link: '/dash/settings',
        text: 'Settings',
        addedClass: 'settings',
        image: settingsSvg()
      },
      {
        link: '/dash/terms',
        text: 'Terms of service',
        addedClass: 'terms',
        image: termsSvg()
      },
      {
        link: '/dash/help',
        text: 'Help',
        addedClass: 'help',
        image: helpSvg()
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
       
        <Logout className={linkClass} logout={this.showLogoutBackdrop} click={this.showLogoutBackdrop}/>
      </li>
    )

    let logout = this.state.isLogoutBackdropShow && <LogOut click={this.hideLogoutBackdrop}/>

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

}

export default Sidebar;



function projectsSvg () {
  return (
    <svg width="25" height="26" viewBox="0 0 25 26" fill="#6ab142" xmlns="http://www.w3.org/2000/svg">
<path d="M7.055 0C3.15975 0.00264961 0.00275 3.0444 0 6.79745C0.0348125 9.24725 1.27194 11.5364 3.335 12.9686V17.8776C3.33669 17.9338 3.3485 17.9892 3.37 18.0414V18.08C3.37862 18.0998 3.38869 18.1192 3.4 18.1378L5.16 20.6621C5.25312 20.7949 5.40869 20.8743 5.575 20.8741H8.485C8.65131 20.8743 8.80687 20.7949 8.9 20.6621L10.66 18.1378C10.6713 18.1192 10.6814 18.0998 10.69 18.08V18.0414C10.7115 17.9892 10.7233 17.9338 10.725 17.8776V12.9686C12.7881 11.5364 14.0252 9.24725 14.06 6.79745C14.0574 3.06313 10.9307 0.0290855 7.055 0ZM8.245 19.9251H5.865L4.775 18.3642H9.33L8.245 19.9251ZM4.34 17.4007V16.1241H9.77L9.775 17.4007H4.34ZM10 12.3086V12.3231C9.85881 12.4126 9.77419 12.5649 9.775 12.7278V15.175H4.34V12.6988C4.34081 12.536 4.25619 12.3837 4.115 12.2942C2.20075 11.0617 1.03794 9.00102 1.005 6.783C1.10106 3.56234 3.88875 1.02648 7.23144 1.11904C10.4391 1.20786 13.0178 3.69241 13.11 6.783C13.082 9.0062 11.9186 11.0733 10 12.3086Z" transform="translate(5.44531 5.12598)" fill="#8B8B8B"/>
<path d="M0.5 0C0.223875 0 0 0.215702 0 0.481747C0 0.747792 0.223875 0.963494 0.5 0.963494C2.57819 0.966143 4.26225 2.58873 4.265 4.59105C4.265 4.85709 4.48888 5.07279 4.765 5.07279C5.04113 5.07279 5.265 4.85709 5.265 4.59105C5.26225 2.05658 3.1305 0.00264961 0.5 0Z" transform="translate(12.2002 7.30762)" fill="#8B8B8B"/>
<path d="M4.1 0H0.5C0.223875 0 0 0.215702 0 0.481747C0 0.747792 0.223875 0.963494 0.5 0.963494H4.1C4.37613 0.963494 4.6 0.747792 4.6 0.481747C4.6 0.215702 4.37613 0 4.1 0Z" transform="translate(0 11.417)" fill="#8B8B8B"/>
<path d="M4.1 0H0.5C0.223875 0 0 0.215702 0 0.481747C0 0.747792 0.223875 0.963494 0.5 0.963494H4.1C4.37613 0.963494 4.6 0.747792 4.6 0.481747C4.6 0.215702 4.37613 0 4.1 0Z" transform="translate(20.3999 11.417)" fill="#8B8B8B"/>
<path d="M3.48936 0.168415C3.30973 -0.0336774 2.99411 -0.0572219 2.78436 0.115846C2.7648 0.131984 2.74655 0.149567 2.7298 0.168415V0.15878L0.174797 2.63014C-0.0349529 2.80321 -0.0593904 3.10731 0.120235 3.30941C0.29986 3.5115 0.615484 3.53504 0.825234 3.36198C0.844797 3.34584 0.863047 3.32825 0.879797 3.30941L3.4348 0.847678C3.64455 0.674611 3.66898 0.370508 3.48936 0.168415Z" transform="translate(3.47559 17.1211)" fill="#8B8B8B"/>
<path d="M3.35335 0.115845C3.16616 -0.038615 2.8901 -0.038615 2.70291 0.115845L0.14791 2.57757C-0.048152 2.76491 -0.0494643 3.06998 0.144973 3.25888C0.239536 3.35078 0.368535 3.40214 0.50291 3.40136L0.497911 3.39654C0.630786 3.39726 0.758535 3.34698 0.85291 3.25684L3.40791 0.795108C3.58754 0.593015 3.5631 0.288913 3.35335 0.115845Z" transform="translate(17.9419 3.25586)" fill="#8B8B8B"/>
<path d="M3.53398 2.73667C3.50586 2.7 3.47249 2.66736 3.4348 2.63978L0.879798 0.168415C0.700173 -0.0336774 0.384548 -0.0572219 0.174798 0.115846C-0.0349523 0.288913 -0.0593909 0.593016 0.120234 0.795109C0.136984 0.813957 0.155235 0.83154 0.174798 0.847678L2.7298 3.30941C2.89392 3.52336 3.20705 3.56859 3.42911 3.41045C3.65117 3.25232 3.69811 2.95063 3.53398 2.73667Z" transform="translate(17.915 17.1123)" fill="#8B8B8B"/>
<path d="M3.38023 2.57757L0.825234 0.115845C0.615484 -0.0572223 0.299859 -0.0336769 0.120234 0.168416C-0.0400781 0.34877 -0.0400781 0.614754 0.120234 0.795108L2.67524 3.25683C2.88498 3.4299 3.20061 3.40636 3.38023 3.20426C3.54055 3.02391 3.54055 2.75793 3.38023 2.57757Z" transform="translate(3.52979 3.25586)" fill="#8B8B8B"/>
<path d="M0.500231 0C0.224106 0 0.000230997 0.215702 0.000230997 0.481747V3.96478C-0.0080815 4.2307 0.208981 4.45279 0.484981 4.46074C0.490043 4.46086 0.495106 4.46098 0.500231 4.46098C0.776356 4.46098 1.00023 4.24527 1.00023 3.97923V0.481747C1.00023 0.215702 0.776356 0 0.500231 0Z" transform="translate(12)" fill="#8B8B8B"/>
</svg>

  )
}

function profileSvg () {
  return (
    
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.35662 6.66498C5.21043 6.66498 6.71323 5.17298 6.71323 3.33249C6.71323 1.49201 5.21043 0 3.35662 0C1.50281 0 0 1.49201 0 3.33249C0 5.17298 1.50281 6.66498 3.35662 6.66498Z" transform="translate(10.1436 6)" stroke="#8B8B8B" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M0 6.82558C0 3.05144 3.07353 0 6.875 0C10.6765 0 13.75 3.05144 13.75 6.82558" transform="translate(6.625 14.0703)" stroke="#8B8B8B" stroke-miterlimit="10" stroke-linecap="round"/>
<circle cx="12.5" cy="12.5" r="12.5" transform="translate(1 1)" stroke="#8B8B8B"/>
</svg>


  )
}

function settingsSvg () {
  return (
    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8094 4.98966H11.5317C11.4511 4.7467 11.3523 4.51014 11.2361 4.28204L12.1455 3.37483C12.3219 3.19792 12.3219 2.91215 12.1455 2.73524L10.5086 1.10226C10.3312 0.926376 10.0447 0.926376 9.8674 1.10226L8.95796 2.00947C8.73339 1.89862 8.5008 1.80461 8.26224 1.72824V0.453606C8.26224 0.203102 8.05864 0 7.80752 0H5.47936C5.22824 0 5.02464 0.203102 5.02464 0.453606V1.77813C4.79541 1.85593 4.57203 1.94988 4.35621 2.05937L3.41039 1.12046C3.23305 0.944577 2.94658 0.944577 2.76924 1.12046L1.1368 2.74885C0.96048 2.92576 0.96048 3.21153 1.1368 3.38843L2.09171 4.34101C1.98587 4.55068 1.8947 4.7674 1.81888 4.98966H0.454719C0.2036 4.98966 0 5.19276 0 5.44327V7.75212C0 8.00262 0.2036 8.20573 0.454719 8.20573H1.81888C1.89277 8.43094 1.9824 8.65077 2.08716 8.86345L1.1368 9.8251C0.96048 10.002 0.96048 10.2878 1.1368 10.4647L2.77379 12.0977C2.95113 12.2735 3.2376 12.2735 3.41494 12.0977L4.35621 11.1587C4.57208 11.2681 4.79547 11.3621 5.02464 11.4399V12.7645C5.02464 13.015 5.22824 13.2181 5.47936 13.2181H7.79388C8.045 13.2181 8.2486 13.015 8.2486 12.7645V11.4671C8.48716 11.3907 8.71969 11.2967 8.94432 11.1859L9.85376 12.0931C10.0311 12.269 10.3176 12.269 10.4949 12.0931L12.1319 10.4601C12.3082 10.2832 12.3082 9.99747 12.1319 9.82056L11.2225 8.91335C11.3389 8.6853 11.4377 8.44875 11.518 8.20573H12.7958C13.0469 8.20573 13.2505 8.00262 13.2505 7.75212V5.44327C13.2506 5.19798 13.0552 4.99703 12.8094 4.98966ZM12.3547 7.29852H11.1906C10.9779 7.29182 10.789 7.43312 10.7359 7.63872C10.6392 8.03063 10.486 8.4065 10.2812 8.75459C10.1742 8.93286 10.2023 9.16091 10.3494 9.30799L11.1724 10.129L10.1766 11.1179L9.34447 10.2878C9.19885 10.1418 8.97291 10.112 8.79426 10.2152C8.44669 10.419 8.07149 10.5718 7.6802 10.6688C7.47234 10.72 7.32836 10.9089 7.33462 11.1224V12.3109H5.93408V11.1043C5.94079 10.8921 5.79914 10.7036 5.59304 10.6507C5.21108 10.5516 4.84514 10.3989 4.50626 10.1971C4.32756 10.0903 4.09895 10.1184 3.95151 10.2651L3.08754 11.1269L2.09625 10.1472L2.95567 9.27623C3.10204 9.13097 3.13188 8.90558 3.02843 8.72737C2.82721 8.39199 2.67414 8.03012 2.57371 7.65233C2.52062 7.44673 2.33168 7.30543 2.11899 7.31212H0.918532V5.89687H2.15991C2.37261 5.90356 2.56155 5.76227 2.61463 5.55667C2.71535 5.17899 2.86837 4.81712 3.06935 4.48162C3.15808 4.29672 3.11147 4.07548 2.95567 3.94183L2.09625 3.07091L3.09209 2.08205L3.95605 2.9439C4.1035 3.09064 4.33211 3.11871 4.51081 3.01194C4.84992 2.8106 5.2158 2.65785 5.59759 2.55834C5.80187 2.50362 5.9413 2.3156 5.93408 2.10473V0.907211H7.33916V2.09566C7.33291 2.30919 7.47689 2.49806 7.68475 2.54926C8.07604 2.64622 8.45124 2.79903 8.79881 3.00287C8.97746 3.10606 9.2034 3.0763 9.34902 2.93029L10.1812 2.09566L11.177 3.08452L10.3494 3.91008C10.2023 4.05716 10.1742 4.28521 10.2812 4.46348C10.4862 4.81145 10.6394 5.18738 10.7359 5.57935C10.789 5.78495 10.9779 5.92624 11.1906 5.91955H12.3547V7.29852Z" transform="translate(0 7.78125)" fill="#8B8B8B"/>
<path d="M2.54643 0C1.14009 0 0 1.1373 0 2.54019C0 3.94308 1.14009 5.08038 2.54643 5.08038C3.95276 5.08038 5.09285 3.94308 5.09285 2.54019C5.09035 1.13827 3.95173 0.00249483 2.54643 0ZM2.54643 4.15951V4.17311C1.64233 4.17311 0.909438 3.44202 0.909438 2.54013C0.909438 1.63825 1.64233 0.907155 2.54643 0.907155C3.45052 0.907155 4.18341 1.63825 4.18341 2.54013C4.17591 3.43669 3.44523 4.15956 2.54643 4.15951Z" transform="translate(4.09277 11.8643)" fill="#8B8B8B"/>
<path d="M13.4705 6.44271C13.469 6.4355 13.4675 6.42836 13.4658 6.42127L12.9747 4.185C12.9203 3.94096 12.6783 3.78679 12.4335 3.84026L11.1876 4.11242C11.0523 3.89248 10.9003 3.6832 10.7329 3.48644L11.4423 2.40686C11.5775 2.19633 11.5165 1.9164 11.3058 1.78089L9.35054 0.524399C9.1395 0.389508 8.85888 0.450348 8.72303 0.660481L8.02277 1.74913C7.77921 1.68841 7.53144 1.64594 7.28157 1.62213L7.0042 0.352029C6.94792 0.107876 6.70385 -0.0445355 6.45916 0.0116549C6.45285 0.0130724 6.4466 0.01466 6.44034 0.016361L4.16675 0.510791C3.92217 0.564997 3.76756 0.806429 3.82116 1.05058L4.13947 2.33882C3.93126 2.46373 3.73221 2.60316 3.54378 2.75614L2.42063 2.03939C2.20958 1.90449 1.92896 1.96533 1.79312 2.17547L0.528998 4.12149C0.393776 4.33202 0.454765 4.61195 0.665413 4.74747L1.80221 5.47324C1.74503 5.70293 1.70399 5.93637 1.67944 6.17179L0.356205 6.4621C0.111566 6.5163 -0.0429812 6.75773 0.0106188 7.00189L0.506262 9.26992C0.560601 9.51396 0.802625 9.66812 1.04738 9.61466L2.37061 9.32889C2.50106 9.52921 2.64543 9.72018 2.80259 9.90043L2.07504 11.0344C1.93982 11.245 2.00081 11.5249 2.21146 11.6604L4.15765 12.9078C4.3687 13.0427 4.64932 12.9819 4.78517 12.7718L5.50362 11.6513C5.73814 11.7122 5.9767 11.7561 6.21753 11.7829L6.49946 13.0757C6.54521 13.2885 6.73603 13.4388 6.95418 13.434H7.04967L9.32326 12.9441C9.55392 12.8701 9.6859 12.6288 9.62338 12.3953L9.346 11.1252C9.5621 10.9997 9.76877 10.8587 9.96441 10.7033L11.0694 11.4109C11.2804 11.5458 11.561 11.485 11.6969 11.2749L12.9474 9.32889C13.0871 9.12074 13.0312 8.83899 12.8225 8.69962C12.8173 8.69605 12.8119 8.69265 12.8064 8.6893L11.7287 7.99982C11.7932 7.7526 11.8388 7.50091 11.8651 7.24683L13.1111 6.97467C13.3576 6.92676 13.5185 6.68862 13.4705 6.44271ZM11.3468 6.45302C11.1449 6.496 10.9974 6.66922 10.9875 6.87488C10.9735 7.28103 10.9 7.68298 10.7693 8.06786C10.7031 8.26512 10.78 8.48206 10.9557 8.59404L11.9379 9.22002L11.1785 10.3994L10.1872 9.76435C10.0126 9.65282 9.78435 9.67334 9.63247 9.81424C9.33628 10.0858 9.00246 10.3135 8.64118 10.4901C8.45287 10.5815 8.35147 10.7894 8.39563 10.9936L8.65028 12.1548L7.28612 12.4542L7.02693 11.2749C6.98385 11.0735 6.8102 10.9264 6.60404 10.9165C6.20912 10.8991 5.81874 10.8258 5.44451 10.6988C5.39756 10.6834 5.34839 10.6757 5.299 10.6761C5.1444 10.6764 5.00053 10.755 4.91704 10.8848L4.25769 11.9099L3.07542 11.1524L3.71203 10.1091C3.82383 9.93484 3.80326 9.70719 3.66201 9.55569C3.39719 9.26901 3.1737 8.94689 2.99812 8.59858C2.90502 8.41249 2.69698 8.31343 2.49338 8.35817L1.28383 8.62126L0.983717 7.26044L2.19327 6.99735C2.3967 6.95392 2.5446 6.77832 2.5525 6.57096C2.58126 6.17712 2.66544 5.78923 2.80259 5.4188C2.86642 5.22285 2.78986 5.00863 2.61616 4.89716L1.5794 4.23489L2.33878 3.05552L3.33916 3.69964C3.51485 3.81355 3.74585 3.79291 3.89847 3.64974C4.18596 3.37866 4.51052 3.14959 4.86247 2.96933C5.04532 2.87549 5.14229 2.67092 5.09892 2.47037L4.83973 1.29099L6.20389 0.991613L6.45853 2.15284C6.50429 2.36564 6.6951 2.51601 6.91325 2.51119C7.31517 2.52185 7.71339 2.59057 8.09552 2.71531C8.29196 2.77899 8.5067 2.70261 8.61845 2.52934L9.25505 1.54048L10.4373 2.298L9.80526 3.27779C9.69227 3.45407 9.71483 3.68456 9.85983 3.83572C10.1312 4.13255 10.3579 4.4672 10.5328 4.82912C10.6259 5.01521 10.834 5.11432 11.0376 5.06953L12.1743 4.82458L12.4745 6.1854L11.3468 6.45302Z" transform="translate(11.521)" fill="#8B8B8B"/>
<path d="M5.03471 2.00041C4.78336 0.83124 3.74609 -0.00299704 2.54739 8.09272e-06C1.14106 -0.000502214 0.000568611 1.13635 2.12515e-07 2.53924C-0.000568186 3.94212 1.13913 5.07982 2.54546 5.08039C3.95179 5.0809 5.09228 3.94405 5.09285 2.54116C5.09291 2.35932 5.07341 2.17805 5.03471 2.00041ZM2.88843 4.13689H2.89298C2.01168 4.31505 1.14788 3.76272 0.942236 2.88948C0.750686 2.00795 1.30976 1.13793 2.19271 0.943508C2.30781 0.919126 2.42519 0.906993 2.54285 0.907219C3.44694 0.905915 4.18091 1.63594 4.18222 2.53782C4.18336 3.30861 3.644 3.97524 2.88843 4.13689Z" transform="translate(15.7231 4.18066)" fill="#8B8B8B"/>
</svg>
)
}

function termsSvg() {
  return(
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0313 0H1.30651C0.586396 0 0 0.578299 0 1.28784V19.712C0 20.4226 0.586396 21 1.30651 21H14.4434C15.1641 21 15.75 20.4226 15.75 19.712V3.98209L12.0313 0ZM12.3397 1.9271L13.9696 3.67289H12.3397V1.9271ZM14.6527 19.712C14.6527 19.8255 14.5585 19.9186 14.4428 19.9186H1.30651C1.19104 19.9186 1.09735 19.8255 1.09735 19.712V1.28784C1.09735 1.17414 1.19104 1.08199 1.30651 1.08199H11.2418V4.21383C11.2418 4.51202 11.4882 4.75376 11.791 4.75376H14.6527V19.712ZM3.03309 5.75176H12.3514C12.5784 5.75176 12.7625 5.9332 12.7625 6.15691C12.7625 6.38062 12.5784 6.56206 12.3514 6.56206H3.03309C2.80614 6.56206 2.62198 6.38062 2.62198 6.15691C2.62198 5.93325 2.80614 5.75176 3.03309 5.75176ZM12.7625 8.87954C12.7625 9.10321 12.5784 9.2847 12.3514 9.2847H3.03309C2.80614 9.2847 2.62198 9.10325 2.62198 8.87954C2.62198 8.65584 2.80614 8.47439 3.03309 8.47439H12.3514C12.5784 8.47439 12.7625 8.65588 12.7625 8.87954ZM12.7625 11.513C12.7625 11.7367 12.5784 11.9182 12.3514 11.9182H3.03309C2.80614 11.9182 2.62198 11.7367 2.62198 11.513C2.62198 11.2893 2.80614 11.1079 3.03309 11.1079H12.3514C12.5784 11.1079 12.7625 11.2893 12.7625 11.513ZM12.7625 14.1913C12.7625 14.415 12.5784 14.5965 12.3514 14.5965H3.03309C2.80614 14.5965 2.62198 14.415 2.62198 14.1913C2.62198 13.9676 2.80614 13.7862 3.03309 13.7862H12.3514C12.5784 13.7862 12.7625 13.9676 12.7625 14.1913Z" transform="translate(0 21) scale(1 -1)" fill="#8B8B8B"/>
</svg>

)
}

function helpSvg () {
  return(
    
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.44043 10.1973C2.44954 9.65495 2.51107 9.22656 2.625 8.91211C2.73893 8.59766 2.97135 8.24902 3.32227 7.86621L4.21777 6.94336C4.60059 6.51042 4.79199 6.04557 4.79199 5.54883C4.79199 5.07031 4.66667 4.69661 4.41602 4.42773C4.16536 4.1543 3.80078 4.01758 3.32227 4.01758C2.85742 4.01758 2.48372 4.14062 2.20117 4.38672C1.91862 4.63281 1.77734 4.96322 1.77734 5.37793H0.512695C0.52181 4.63965 0.783854 4.04492 1.29883 3.59375C1.81836 3.13802 2.49284 2.91016 3.32227 2.91016C4.18359 2.91016 4.85352 3.14258 5.33203 3.60742C5.8151 4.06771 6.05664 4.70117 6.05664 5.50781C6.05664 6.30534 5.6875 7.09147 4.94922 7.86621L4.2041 8.60449C3.87142 8.97363 3.70508 9.50456 3.70508 10.1973H2.44043ZM2.38574 12.3643C2.38574 12.1592 2.44727 11.9883 2.57031 11.8516C2.69792 11.7103 2.88477 11.6396 3.13086 11.6396C3.37695 11.6396 3.5638 11.7103 3.69141 11.8516C3.81901 11.9883 3.88281 12.1592 3.88281 12.3643C3.88281 12.5693 3.81901 12.7402 3.69141 12.877C3.5638 13.0091 3.37695 13.0752 3.13086 13.0752C2.88477 13.0752 2.69792 13.0091 2.57031 12.877C2.44727 12.7402 2.38574 12.5693 2.38574 12.3643Z" transform="translate(9 5)" fill="#8B8B8B"/>
<circle cx="12.5" cy="12.5" r="12" stroke="#8B8B8B"/>
</svg>


    )
}

function logoutSvg() {
  return(
<svg width="20" height="21" viewBox="0 0 20 21" fill="red" xmlns="http://www.w3.org/2000/svg">
<path d="M9.63441 19.7967H4.0067C2.47729 19.7967 1.23635 18.5845 1.23635 17.1004V3.89962C1.23635 2.41108 2.48187 1.20331 4.0067 1.20331H9.72599C10.0694 1.20331 10.3442 0.935908 10.3442 0.601655C10.3442 0.267402 10.0694 0 9.72599 0H4.0067C1.795 0 0 1.75149 0 3.89962V17.1004C0 19.253 1.79958 21 4.0067 21H9.63441C9.97784 21 10.2526 20.7326 10.2526 20.3983C10.2526 20.0641 9.97326 19.7967 9.63441 19.7967Z" fill="#8B8B8B"/>
<path d="M15.0881 4.00101L11.1592 0.177154C10.9166 -0.0590514 10.5273 -0.0590514 10.2846 0.177154C10.0419 0.41336 10.0419 0.792179 10.2846 1.02838L13.1603 3.8272H0.618177C0.274745 3.8272 0 4.0946 0 4.42885C0 4.76311 0.274745 5.03051 0.618177 5.03051H13.1603L10.2846 7.82932C10.0419 8.06553 10.0419 8.44435 10.2846 8.68055C10.4037 8.79643 10.564 8.85882 10.7197 8.85882C10.8753 8.85882 11.0356 8.80088 11.1547 8.68055L15.0835 4.8567C15.3308 4.61603 15.3308 4.23276 15.0881 4.00101Z" transform="translate(4.73059 6.0752)" fill="#8B8B8B"/>
</svg>

    )
}