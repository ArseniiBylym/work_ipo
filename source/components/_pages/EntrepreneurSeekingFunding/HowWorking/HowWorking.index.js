import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import './HowWorking.style.styl'

import Container from '../../../grid/Container/Container.index'
import ContentSection from '../../../ContentSection/ContentSection.index'
import PromoItem from './HowWorking.item'

HowWorking.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

// mock
import img1 from './images/cofe.png'
import img2 from './images/pc.jpg'

const mockData = [
  {
    title: `Lorem ipsum1`,
    image: img2,
    'title.hover': `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi debitis eligendi id numquam quidem
            quisquam voluptates. Ab alias animi architecto blanditiis debitis distinctio ducimus est, ex ipsam odit
            praesentium.`
  },
  {
    title: `Lorem ipsum2`,
    image: img1,
    'title.hover': `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi debitis eligendi id numquam quidem
            quisquam voluptates.`
  },
  {
    title: `Lorem ipsum3`,
    image: img1,
    'title.hover': `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi debitis eligendi id numquam quidem
            quisquam voluptates.`
  },
  {
    title: `Lorem ipsum4`,
    image: img1,
    'title.hover': `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi debitis eligendi id numquam quidem
            quisquam voluptates.`
  },
  {
    title: `Lorem ipsum5`,
    image: img1,
    'title.hover': `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi debitis eligendi id numquam quidem
            quisquam voluptates.`
  },
  {
    title: `Lorem ipsum6`,
    image: img2,
    'title.hover': `Lorem ipsum dolor sit amet`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi debitis eligendi id numquam quidem
            quisquam voluptates. Ab alias animi architecto blanditiis debitis distinctio ducimus est, ex ipsam odit
            praesentium.`
  }
]

function HowWorking(props) {

  const renderItems = mockData.map(item => {
    return (
      <PromoItem key={item.title}
        title={item.title}
        titleHover={item[`title.hover`]}
        image={item.image}
        text={item.text}
      />
    )
  })

  const {dir} = props
  return (
    <Container>
      <ContentSection className={`how-working`}>
        <header className="content-section__header" dir={dir}>
          <h1 className="content-section__title">
            How we are working?
          </h1>
          <div className="content-section__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </header>
        <div className="how-working__container">
          {renderItems}
        </div>
      </ContentSection>
    </Container>
  )

}

export default multiLang(HowWorking)