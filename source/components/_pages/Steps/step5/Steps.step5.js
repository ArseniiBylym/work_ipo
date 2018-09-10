import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import { history } from '../../../../history'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { clearStatus, setStatus, setTouched } from '../../../../redux/reducers/steps.reducer'
import Review from './Steps.step5.review'
import DownloadButton from '../../../DownloadButton/DownloadButton.index'
import PrintButton from './Steps.step5.print'


class Step5 extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
    // from Steps.index
    projectId: PropTypes.string,
    projectName: PropTypes.string,
    content: PropTypes.object,
    // from connect
    setStatus: PropTypes.func,
    clearStatus: PropTypes.func,
    setTouched: PropTypes.func,
    pdfLink: PropTypes.string
  }

  componentDidMount() {
    const {setStatus, setTouched} = this.props
    setStatus(`step5`, true)
    setTouched(`step5`)
  }

  onButtonDoneClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {projectId, projectName, clearStatus} = this.props

    window.sessionStorage.clear()
    window.localStorage.removeItem(`user-first-name`)
    window.localStorage.removeItem(`user-last-name`)
    window.localStorage.removeItem(`user-email`)
    window.localStorage.removeItem(`user-phone`)
    clearStatus()

    history.replace(`/home/${projectName}/${projectId}`)
  }

  renderPage = () => {
    const {dir, content, pdfLink} = this.props

    if (!content) return null

    return (
      <section className="steps-page__content">
        <header className="steps-page__header" dir={dir}>
          <h1 className="steps-page__title">
            {content[`rewiew.title`]}
          </h1>
          <div className="steps-page__text">
            {content[`rewiew.descr`]}
          </div>
        </header>
        <Review content = {content} />
        <div className="steps-page__buttons-wrapper">
          <DownloadButton multiple={false}
            text={content[`rewiew.download`]}
            file={pdfLink}
          />
          {/*<PrintButton multiple={false}*/}
            {/*text={content[`rewiew.print`]}*/}
            {/*file={file}*/}
          {/*/>*/}
        </div>
        <div className="steps-page__button-wrapper steps-page__button-wrapper--center">
          <button className="steps-page__button button button-main"
            type="button"
            onClick={this.onButtonDoneClick}
          >
            {content[`done.btn`]}
          </button>
        </div>
      </section>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderPage()}
      </Fragment>
    )
  }

}

const mapStateToProps = state => ({pdfLink: state.pdf.pdfLink})
const mapDispatchToProps = {clearStatus, setStatus, setTouched}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    multiLang(Step5)
  )
)
