import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import file from './images/Edo.pdf'

NDA.propTypes = {
  // from SignUp.entrepreneur
  updateValue: PropTypes.func
}

function NDA(props) {

  const {updateValue} = props
  return (
    <Fragment>
      <div className="sign-up__title-download-link">
        Pre-Signed NDA
      </div>
      <a href={file}
        download
        className="sign-up__download-link"
        onClick={updateValue}
      >
        Download File
      </a>
    </Fragment>
  )

}

export default NDA