import React from 'react'
import PropTypes from 'prop-types'
import toggleTooltip from '../_HOC/toggleInputTooltip.hoc'
import './FormFields.style.styl'
import {validate, getValidateRules} from './validate'

Input.propTypes = {
  // form from
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelDone: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  validation: PropTypes.array.isRequired,
  changeValid: PropTypes.func.isRequired,
  changeErrors: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  validationRules: PropTypes.array.isRequired,
  changeValidationRules: PropTypes.func,
  // form HOC toggleInputTooltip.hoc
  isOpen: PropTypes.bool,
  showTooltip: PropTypes.func,
  hideTooltip: PropTypes.func
}

function Input(props) {

  const setClassLabelShort = () => {
    const {value} = props
    if (!value.length) return `form-control__label-hide`
    return `form-control__label-show`
  }

  const setClassLabel = () => {
    const {value} = props
    if (!value.length) return `form-control__label-show`
    return `form-control__label-hide`
  }

  const onBlur = evt => {
    const {changeErrors} = props
    const {name, value, validation, changeValid, hideTooltip, changeValidationRules} = props
    const errors = validate(value, validation)
    errors.length ? changeValid(name, false) : changeValid(name, true)
    changeErrors(evt, errors)
    if (changeValidationRules) hideTooltip()
  }

  const onFocus = evt => {
    const {validation, changeValidationRules, showTooltip} = props
    const validationMessages = getValidateRules(validation)
    if (changeValidationRules) {
      changeValidationRules(evt, validationMessages)
      showTooltip()
    }
  }

  const renderErrors = () => {
    const {errors} = props
    return errors.map(error => {
      return (
        <div key={error}>
          {error}
        </div>
      )
    })
  }

  const renderValidationRules = () => {
    const {validationRules} = props
    return validationRules.map(message => {
      return (
        <li key={message}>
          {message}
        </li>
      )
    })
  }

  const renderTooltip = () => {
    return (
      <div className="form-control__validation-rules">
        <ul className="form-control__validation-rules-list">
          {renderValidationRules()}
        </ul>
      </div>
    )
  }

  const {type, name, value, label, labelDone, changeValue, isOpen, errors} = props
  return (
    <div className="form-control">
      <input className="form-control__field"
        type={type}
        name={name}
        id={`${name}-id`}
        value={value}
        onChange={changeValue}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <span className={`form-control__label form-control__label--short ${setClassLabelShort()}`}>
        {labelDone}
      </span>
      <label className={`form-control__label ${setClassLabel()}`}
        htmlFor={`${name}-id`}
      >
        {label}
      </label>
      {isOpen && errors.length <= 0 && renderTooltip()}
      <div className="form-control__errors">
        {renderErrors()}
      </div>
    </div>
  )

}

export default toggleTooltip(Input)