import React from 'react'
import PropTypes from 'prop-types'
import lang from '../../../_HOC/lang.hoc'
import './WhoAreWe.style.styl'
import image from './images/About Us-01.svg'

import Container from '../../../grid/Container/Container.index'
import ContentSection from '../../../ContentSection/ContentSection.index'

WhoAreWe.propTypes = {
  contentText: PropTypes.object,
  contentMedia: PropTypes.object,
  // from lang.hoc
  dir: PropTypes.string
}

function WhoAreWe(props) {

  const render = function () {
    const {dir, contentText, contentMedia} = props

    if (!contentText || !contentMedia) return null
    return (
      <ContentSection className={`who-are-we`}>
        <header className="content-section__header" dir={dir}>
          <h1 className="content-section__title">
            {contentText.title}
          </h1>
        </header>
        <div className="who-are-we__container" dir={dir}>
          <div className="who-are-we__item who-are-we__text">
            <p>
              {contentText.descr}
            </p>
          </div>
          <div className="who-are-we__item who-are-we__image-wrapper">
            <img src={contentMedia.img} alt="who-are-we" />
          </div>
        </div>
      </ContentSection>
    )
  }

  return (
    <Container>
      {render()}
    </Container>
  )

}

export default lang(WhoAreWe)