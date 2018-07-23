import React from 'react'
import './PageHeader.style.styl'

import Container from '../grid/Container/Container.index'
import PageLogo from '../PageLogo/PageLogo.index'

function PageHeader() {

  return (
    <header className="page-header">
      <Container>
        <div className="page-header__logo">
          <PageLogo />
        </div>
        <div className="page-header__main-nav">MainNav</div>
        <div className="page-header__user-block">UserBlock</div>
      </Container>
    </header>
  )

}

export default PageHeader