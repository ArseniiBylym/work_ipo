import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'

ProjectDocuments.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function ProjectDocuments(props) {

  const {dir} = props
  return (
    <div>
      <section className="project-page__section" dir={dir}>
        <h1 className="project-page__subtitle">
          Documentation
        </h1>
        <div className="project-page__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,</p>
        </div>
      </section>
    </div>
  )

}

export default multiLang(ProjectDocuments)