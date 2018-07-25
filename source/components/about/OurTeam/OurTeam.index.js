import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../Lang/Lang.hoc'

import ContentSection from '../../ContentSection/ContentSection.index'
import Container from '../../grid/Container/Container.index'
import CarouselTeam from '../../CarouselTeam/CarouselTeam.index'


OurTeam.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

// const mock
import image from './images/EvaMuller.jpg'
const mockData = [
  {photo: image, name: `EvaMuller1`, post: `Associate`},
  {photo: image, name: `EvaMuller2`, post: `Associate`},
  {photo: image, name: `EvaMuller3`, post: `Associate`},
  {photo: image, name: `EvaMuller4`, post: `Associate`},
  {photo: image, name: `EvaMuller5`, post: `Associate`},
  {photo: image, name: `EvaMuller6`, post: `Associate`},
  {photo: image, name: `EvaMuller7`, post: `Associate`},
  {photo: image, name: `EvaMuller8`, post: `Associate`},
  {photo: image, name: `EvaMuller9`, post: `Associate`},
]

function OurTeam(props) {

  const {dir} = props
  return (
    <Container>
      <ContentSection className={`our-team`}>
        <header className="content-section__header" dir={dir}>
          <h1 className="content-section__title">
            Our team
          </h1>
          <div className="content-section__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </header>
        <CarouselTeam team={mockData} />
      </ContentSection>
    </Container>
  )

}

export default multiLang(OurTeam)