import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'
import {history} from '../../../history'

Step5.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  // from Steps.index
  projectId: PropTypes.string,
  projectName: PropTypes.string,
}

function Step5(props) {

  const onButtonDoneClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {projectId, projectName} = props

    history.replace(`/home/${projectName}/${projectId}`)
  }

  const {dir} = props
  return (
    <section className="steps-page__content">
      <header className="steps-page__header" dir={dir}>
        <h1 className="steps-page__title">
          Review & Send
        </h1>
        <div className="steps-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </header>
      <div className="steps-page__button-wrapper steps-page__button-wrapper--center">
        <button className="steps-page__button button button-main"
          type="button"
          onClick={onButtonDoneClick}
        >
          Done
        </button>
      </div>
    </section>
  )

}

export default multiLang(Step5)