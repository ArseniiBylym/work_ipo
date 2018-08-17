import React from 'react'
import PropTypes from 'prop-types'
import lang from '../../../_HOC/lang.hoc'
import './WhoAreWe.style.styl'
import image from './images/About Us-01.svg'

import Container from '../../../grid/Container/Container.index'
import ContentSection from '../../../ContentSection/ContentSection.index'

WhoAreWe.propTypes = {
  // from lang.hoc
  dir: PropTypes.string
}

function WhoAreWe(props) {

  const {dir} = props
  return (
    <Container>
      <ContentSection className={`who-are-we`}>
        <header className="content-section__header" dir={dir}>
          <h1 className="content-section__title">
            Who are we?
          </h1>
        </header>
        <div className="who-are-we__container" dir={dir}>
          <div className="who-are-we__item who-are-we__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="who-are-we__item who-are-we__image-wrapper">
            <img src={image} alt="who-are-we" />
          </div>
        </div>
      </ContentSection>
    </Container>
  )

}

export default lang(WhoAreWe)