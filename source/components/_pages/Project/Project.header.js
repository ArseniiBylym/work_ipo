import React from 'react'
import PropTypes from 'prop-types'
import lang from '../../_HOC/lang.hoc'

import ReactPlayer from 'react-player'
import ProgressBarCircle from '../../ProgressBarCircle/ProgressBarCircle.index'

ProjectHeader.propTypes = {
  // from lang.hoc
  dir: PropTypes.string,
  // from Project.index
  purchaseButtonClick: PropTypes.func
}

function ProjectHeader(props) {

  const {dir, purchaseButtonClick} = props
  return (
    <header>
      <header className="content-section__header">
        <h1 className="content-section__title"  >
          Project title
        </h1>
        <div className="project-page__container" dir={dir}>
          <div className="project-page__project-video">
            <ReactPlayer url={`https://www.youtube.com/watch?v=aa5BUDKgzRQ`}
              width={595}
              height={375}
              controls
            />
          </div>
          <div className="project-page__detail">
            <div className="project-page__progress-bar">
              <ProgressBarCircle dynamicValue={2000} staticValue={8000} />
            </div>
            <div className="project-page__funds">
              $282,120 Pledged
            </div>
            <div className="project-page__finish-date">
              16 days to go
            </div>
            <div className="project-page__buttons-wrapper">
              <button onClick={purchaseButtonClick}
                type="button"
                className="project-page__button button button-main"
              >
                Purchase
              </button>
              <button type="button" className="project-page__button button button-bordered">Subscribe</button>
            </div>
          </div>
        </div>
      </header>
    </header>
  )

}

export default lang(ProjectHeader)