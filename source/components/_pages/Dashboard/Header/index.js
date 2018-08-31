import React, { Component, Fragment } from 'react';
import Logo from '../../../PageHeader/PageLogo/PageLogo.index';
import Search from './Search';
import ProfileMenu from './ProfileMenu';
import Langs from '../../../Lang/Lang.switch';
import './header.styl';
import { connect } from 'react-redux';
import multiLang from '../../../_HOC/lang.hoc'

class Header extends Component {

  renderPage() {
    const {content, lang} = this.props
    if(!content) return null
      console.log(lang)


    return (
      <header className="page-header dash-header">
        <Logo
          path="dash"
        />
        <div className="dash-header__menu">
          <Search placeholder={content.pageContent[0][lang].search}/>
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
  render () {
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
  multiLang(Header)
  );
