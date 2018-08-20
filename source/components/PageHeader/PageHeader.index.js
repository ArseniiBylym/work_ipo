import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.style.styl'

import Container from '../grid/Container/Container.index'
import PageLogo from './PageLogo/PageLogo.index'
import MainNav from './MainNav/MainNav.index'
import UserBlock from './UserBlock/UserBlock.index'

PageHeader.propTypes = {
  contentText: PropTypes.object,
  contentMedia: PropTypes.object
}

function PageHeader(props) {

  const render = function () {
    const {contentText, contentMedia} = props

    if(!contentText || !contentMedia) return null
    return (
      <Container>
        <div className="page-header__logo">
          <PageLogo logo = {contentMedia.logo} />
        </div>
        <div className="page-header__main-nav">
          <MainNav contentText = {contentText} />
        </div>
        <div className="page-header__user-block">
          <UserBlock contentText = {contentText} />
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

export default PageHeader