import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPageContent } from '../../../redux/reducers/home-page.reducer'
import lang from '../../_HOC/lang.hoc'

import BaseLayout from '../../grid/BaseLayout/BaseLayout.index'
import ContactUs from './ContactUs/ContactUs.index'
import SocialLinks from '../../SocialLinks/SocialLinks.index'

class Contacts extends Component {

  static propTypes = {
    // from connect
    getPageContent: PropTypes.func,
    // from lang.hoc
    lang: PropTypes.string,
    dir: PropTypes.string
  }

  componentDidUpdate(prevProps) {
    const {getPageContent, lang} = this.props

    if (prevProps.lang !== lang) getPageContent(lang, `contactus`)
  }

  render() {
    const {dir} = this.props
    return (
      <BaseLayout dir={dir}>
        <ContactUs />
        <SocialLinks />
      </BaseLayout>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {getPageContent}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    lang(Contacts)
  )
)