import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

ProjectAboutCompany.propTypes = {}

function ProjectAboutCompany(props) {

  return (
    <section className="project-page__section">
      <h1 className="project-page__subtitle">
        About our company
      </h1>
      <div className="project-page__video-about-company">
        <ReactPlayer url={`https://www.youtube.com/watch?v=aa5BUDKgzRQ`}
          width={400}
          height={250}
        />
      </div>
    </section>
  )

}

export default ProjectAboutCompany