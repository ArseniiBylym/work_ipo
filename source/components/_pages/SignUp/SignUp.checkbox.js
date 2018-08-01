import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import multiLang from '../../_HOC/lang.hoc'

Checkbox.propTypes = {
  // from SignUp.investorForm
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  changeValue: PropTypes.func.isRequired,
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function Checkbox(props) {

  const setClassName = () => {
    const {value} = props

    if (value) return `sign-up__checkbox-label sign-up__checkbox-label--active`
    return  `sign-up__checkbox-label`
  }

  const {name, value, changeValue, dir} = props
  return (
    <div className="sign-up__checkbox-wrapper">
      <label className={setClassName()}>
        <span dir={dir}>I have read and agree to the </span>
        <Link to={`/terms-of-service`}
          className="sign-up__link"
          dir={dir}
        >terms of service
        </Link>
        <input className="sign-up__checkbox"
          type="checkbox"
          name={name}
          checked={value}
          onChange={changeValue}
        />
      </label>
    </div>
  )

}

export default multiLang(Checkbox)