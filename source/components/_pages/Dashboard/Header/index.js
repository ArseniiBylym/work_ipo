import React, { Component } from 'react';
import Logo from '../../../PageHeader/PageLogo/PageLogo.index';
import Search from './Search';
import ProfileMenu from './ProfileMenu';
import Langs from '../../../Lang/Lang.switch';
import './header.styl';

class Header extends Component {

  render() {
    return (
      <header className="page-header dash-header">
        <Logo
          path="dash"
        />
        <div className="dash-header__menu">
          <Search />
          <div className="dash-header__settings">
            <div className="dash-header__lang">
              <Langs />
            </div>
            <ProfileMenu />
          </div>
        </div>
      </header>
    );
  }

}

export default Header;
