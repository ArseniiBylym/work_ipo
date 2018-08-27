import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPageContent } from '../../../../redux/reducers/pageContent.reducer'
import { tutorial } from '../../../../utils/routesBack'
import multiLang from '../../../_HOC/lang.hoc'
import './HowDoesItWork.style.styl'

import ContentSection from '../../../ContentSection/ContentSection.index'
import Container from '../../../grid/Container/Container.index'
import BaseLayout from '../../../grid/BaseLayout/BaseLayout.index'

class HowDoesItWork extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    lang: PropTypes.string,
    // form connect
    content: PropTypes.object,
    getPageContent: PropTypes.func
  }

  componentDidMount() {
    const {lang, getPageContent} = this.props

    getPageContent(lang, tutorial)
  }

  renderPage() {
    const {content, dir, lang} = this.props

    if (!content.pageContent) return null

    return (
      <BaseLayout pageHeaderText={content.pageContent[0][lang]}
        pageHeaderMedia={content.pageContent[0].media}
        pageFooterText={content.pageContent[1][lang]}
        path={tutorial}
      >
        <Container>
          <ContentSection className={`how-work`}>
            <header className="content-section__header" dir={dir}>
              <h1 className="content-section__title">
                {content.pageContent[2][lang] ?  content.pageContent[2][lang][`how.title`] : null}
              </h1>
            </header>
            <div className="how-work__text" dir={dir}>
              {content.pageContent[2][lang] ?  content.pageContent[2][lang][`how.descr`] : null}
            </div>
          </ContentSection>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  multiLang(HowDoesItWork)
)