import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'

import ReactPlayer from 'react-player'

ProjectAboutCompany.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function ProjectAboutCompany(props) {

  const {dir} = props
  return (
    <section className="project-page__section">
      <h1 className="project-page__subtitle" dir={dir}>
        About our company
      </h1>
      <div className="project-page__video-about-company">
        <ReactPlayer url={`https://www.youtube.com/watch?v=aa5BUDKgzRQ`}
          width={400}
          height={250}
          controls
        />
      </div>
    </section>
  )

}

export default multiLang(ProjectAboutCompany)