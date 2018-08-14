import React from 'react'
import PropTypes from 'prop-types'
import CarouselTeam from '../../CarouselTeam/CarouselTeam.index'
import multiLang from '../../_HOC/lang.hoc'

ProjectTeam.propTypes = {
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

function ProjectTeam(props) {

  const {dir} = props
  return (
    <section className="project-page__section project-page__our-team">
      <div className="project-page__our-team-header">
        <h1 className="project-page__subtitle" dir={dir}>
          Our team
        </h1>
        <div className="project-page__text" dir={dir}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,</p>
        </div>
      </div>
      <CarouselTeam team={mockData} />
    </section>
  )

}

export default multiLang(ProjectTeam)