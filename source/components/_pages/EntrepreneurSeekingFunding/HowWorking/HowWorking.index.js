import React from 'react'
import PropTypes from 'prop-types'
import './HowWorking.style.styl'

import Container from '../../../grid/Container/Container.index'
import ContentSection from '../../../ContentSection/ContentSection.index'
import PromoItem from './HowWorking.item'

HowWorking.propTypes = {
  contentText: PropTypes.object
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

  const render = function () {
    const {contentText} = props

    if (!contentText) return null
    return (
      <ContentSection className={`how-working`}>
        <header className="content-section__header">
          <h1 className="content-section__title">
            {contentText.title}
          </h1>
          <div className="content-section__text">
            <p>
              {contentText.descr}
            </p>
          </div>
        </header>
        <div className="how-working__container">
          {renderItems}
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

export default HowWorking