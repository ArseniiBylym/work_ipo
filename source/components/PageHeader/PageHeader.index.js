import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.style.styl'
import multilang from '../_HOC/lang.hoc'
import { connect } from 'react-redux'

import Container from '../grid/Container/Container.index'
import PageLogo from './PageLogo/PageLogo.index'
import MainNav from './MainNav/MainNav.index'
import UserBlock from './UserBlock/UserBlock.index'
import UserBlockLogin from './UserBlock/UserBlockLogin'

PageHeader.propTypes = {
  // from HOC Lang
  dir: PropTypes.string,
  contentText: PropTypes.object,
  contentMedia: PropTypes.object,
  // from connect
  isAuthenticated: PropTypes.bool
}

function PageHeader(props) {

  const render = function () {
    const {contentText, contentMedia, dir, isAuthenticated} = props

    if(!contentText || !contentMedia) return null
    return (
      <Container dir = {dir}>
        <div className="page-header__logo">
          <PageLogo logo = {contentMedia.logo} />
        </div>
        <div className="page-header__main-nav">
          <MainNav contentText = {contentText} />
        </div>
        <div className="page-header__user-block">
          {!isAuthenticated ? <UserBlock contentText = {contentText} /> : <UserBlockLogin contentText = {contentText} /> }
        </div>
      </Container>
    )
  }

  return (
    <header className="page-header">
      {render()}
    </header>
  )

}

const mapStateToProps = state => ({
  isAuthenticated: !!state.login.token
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(
  multilang(PageHeader)
)