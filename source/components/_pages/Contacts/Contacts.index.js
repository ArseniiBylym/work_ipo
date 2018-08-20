import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPageContent } from '../../../redux/reducers/pageContent.reducer'
import lang from '../../_HOC/lang.hoc'

import BaseLayout from '../../grid/BaseLayout/BaseLayout.index'
import ContactUs from './ContactUs/ContactUs.index'
import SocialLinks from '../../SocialLinks/SocialLinks.index'

class Contacts extends Component {

  static propTypes = {
    // from connect
    getPageContent: PropTypes.func,
    content: PropTypes.object,
    // from lang.hoc
    lang: PropTypes.string,
    dir: PropTypes.string
  }

  componentDidMount() {
    const {getPageContent, lang} = this.props

    getPageContent(lang, `contactus`)
  }

  componentDidUpdate(prevProps) {
    const {getPageContent, lang} = this.props

    if (prevProps.lang !== lang) getPageContent(lang, `contactus`)
  }

  renderPage() {
    const {dir, content, lang} = this.props

    if (!content.pageContent) return

    return (
      <BaseLayout key = {`baseLayout`}
        dir = {dir}
        pageHeaderText = {content.pageContent[0][lang]}
        pageHeaderMedia = {content.pageContent[0].media}
        pageFooterText = {content.pageContent[1][lang]}
      >
        <ContactUs key = {`contactUs`}
          contentText = {content.pageContent[2][lang]}
          contentMedia = {content.pageContent[2].media}
        />
        <SocialLinks />
      </BaseLayout>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderPage()}
      </Fragment>
    )
  }

}

const mapStateToProps = state => ({content: state.pageContent})
const mapDispatchToProps = {getPageContent}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    lang(Contacts)
  )
)