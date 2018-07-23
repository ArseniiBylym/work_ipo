import React from 'react'
import './PageFooter.style.styl'

import Container from '../grid/Container/Container.index'
import Copyright from '../Copyright/Copyright.index'
import LangSwitch from '../Lang/Lang.switch'

function PageFooter() {

  return (
    <footer className="page-footer">
      <Container>
        <div className="page-footer__copyright">
          <Copyright />
        </div>
        <div className="page-footer__lang">
          <LangSwitch />
        </div>
      </Container>
    </footer>
  )

}

export default PageFooter