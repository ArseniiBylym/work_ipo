import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPageContent } from '../../../redux/reducers/home-page.reducer'
import multiLang from '../../_HOC/lang.hoc'

import ContactUs from './ContactUs/ContactUs.index'
import SocialLinks from '../../SocialLinks/SocialLinks.index'

class Contacts extends Component {

  static propTypes = {
    // from connect
    getPageContent: PropTypes.func,
    // from HOC Lang.hoc
    lang: PropTypes.string
  }

  componentDidUpdate(prevProps) {
    const {getPageContent, lang} = this.props

    if (prevProps.lang !== lang) getPageContent(lang, `contactus`)
  }

  render() {
    return (
      <div>
        <ContactUs />
        <SocialLinks />
      </div>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {getPageContent}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    multiLang(Contacts)
  )
)