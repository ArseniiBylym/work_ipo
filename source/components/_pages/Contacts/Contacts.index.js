import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPageContent } from '../../../redux/reducers/pageContent.reducer'
import multilang from '../../_HOC/lang.hoc'
import {contacts} from '../../../utils/routesBack'

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

    getPageContent(lang, contacts)
    console.log(this.props)
    console.log(this.props.content)
  }

  renderPage() {
    const {dir, content, lang} = this.props

    if (!content.pageContent) return
      console.log(content)

    return (
      <BaseLayout dir = {dir}
        pageHeaderText = {content.pageContent[0][lang]}
        pageHeaderMedia = {content.pageContent[0].media}
        pageFooterText = {content.pageContent[1][lang]}
        path = {contacts}
      >
        <ContactUs contentText = {content.pageContent[2][lang]}
          contentMedia = {content.pageContent[2].media}
        />
        <SocialLinks content = {content.contacts} dir = {dir} />
      </BaseLayout>
    )
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }

}

const mapStateToProps = state => ({content: state.pageContent})
const mapDispatchToProps = {getPageContent}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    multilang(Contacts)
  )
)