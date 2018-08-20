import React from 'react'
import PropTypes from 'prop-types'
import './PageFooter.style.styl'

import Container from '../grid/Container/Container.index'
import Copyright from './Copyright/Copyright.index'
import LangSwitch from '../Lang/Lang.switch'

PageFooter.propTypes = {
  contentText: PropTypes.object
}

function PageFooter(props) {

  const {contentText} = props
  return (
    <footer className="page-footer">
      <Container>
        <div className="page-footer__copyright">
          <Copyright contentText = {contentText} />
        </div>
        <div className="page-footer__lang">
          <LangSwitch contentText = {contentText} />
        </div>
      </Container>
    </footer>
  )

}

export default PageFooter