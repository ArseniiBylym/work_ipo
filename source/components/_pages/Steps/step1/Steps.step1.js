import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../_HOC/lang.hoc'
import Form from './Steps.form'

Step1.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  lang: PropTypes.string,
  // from Steps.index
  checkedDetail: PropTypes.func,
  content: PropTypes.object
}

function Step1(props) {

  const renderPage = () => {
    const {dir, lang, checkedDetail, content} = props

    if (!content) return null

    return (
      <section className="steps-page__content">
        <header className="steps-page__header" dir={dir}>
          <h1 className="steps-page__title">
            {content[`personal.title`]}
          </h1>
          <div className="steps-page__text">
            {content[`personal.descr`]}
          </div>
        </header>
        <div className="steps-page__form-wrapper">
          <Form dir={dir}
            lang={lang}
            checkedDetail={checkedDetail}
            content = {content}
          />
        </div>
      </section>
    )
  }

  return (
    <Fragment>
      {renderPage()}
    </Fragment>
  )

}

export default multiLang(Step1)