import React from 'react'
import './PageHeader.style.styl'

import Container from '../Grid/Container/Container.index'

function PageHeader() {

  return (
    <header className="page-header">
      <Container>
        <h1>Page header</h1>
      </Container>
    </header>
  )

}

export default PageHeader