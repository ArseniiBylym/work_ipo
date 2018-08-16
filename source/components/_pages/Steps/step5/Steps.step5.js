import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import {history} from '../../../../history'
import Review from './Steps.step5.review'
import DownloadButton from '../../../DownloadButton/DownloadButton.index'
import PrintButton from './Steps.step5.print'

// fake file
import file from './images/puppy.jpg'

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

    window.sessionStorage.removeItem(`stepCheck`)
    window.sessionStorage.removeItem(`stepBank`)
    window.sessionStorage.removeItem(`stepPurchase`)
    window.sessionStorage.removeItem(`stepSignature`)
    window.sessionStorage.removeItem(`stepRegistration`)
    window.sessionStorage.removeItem(`stepLogin`)
    window.sessionStorage.removeItem(`disableStep1Login`)
    window.sessionStorage.removeItem(`disableStep1Registration`)
    window.sessionStorage.removeItem(`disableStep2`)
    window.sessionStorage.removeItem(`disableStep3`)
    window.sessionStorage.removeItem(`disableStep4`)

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
      <Review />
      <div className="steps-page__buttons-wrapper">
        <DownloadButton multiple={false}
          text={`Download file`}
          file={file}
        />
        <PrintButton multiple={false}
          text={`Print file`}
          file={file}
        />
      </div>
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