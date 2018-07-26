import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import './ContactUs.style.styl'
import image from './images/Group.svg'

import Container from '../../../grid/Container/Container.index'
import ContentSection from '../../../ContentSection/ContentSection.index'
import Form from '../Form/Form.index'

ContactUs.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function ContactUs(props) {

  const {dir} = props
  return (
    <Container>
      <ContentSection className={`contact-us`}>
        <header className="content-section__header" dir={dir}>
          <h1 className="content-section__title">
            Contact us
          </h1>
          <div className="content-section__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </header>
        <div className="contact-us__container">
          <div className="contact-us__item">
            <Form />
          </div>
          <div className="contact-us__item contact-us__image-wrapper">
            <img src={image} alt="contact us" />
          </div>
        </div>
      </ContentSection>
    </Container>
  )

}

export default multiLang(ContactUs)