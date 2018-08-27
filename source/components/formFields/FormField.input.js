import React from 'react'
import PropTypes from 'prop-types'
import toggleTooltip from '../_HOC/toggleInputTooltip.hoc'
import multiLang from '../_HOC/lang.hoc'
import './FormFields.style.styl'
import {validate, getValidateRules} from './validate'
import {capitalizeFirstLetter} from './utils'

Input.propTypes = {
  // from form
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelDone: PropTypes.string,
  changeValue: PropTypes.func.isRequired,
  validation: PropTypes.array.isRequired,
  changeErrors: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  validationRules: PropTypes.array.isRequired,
  changeValidationRules: PropTypes.func,
  password: PropTypes.string,
  //from HOC toggleInputTooltip.hoc
  isOpen: PropTypes.bool,
  showTooltip: PropTypes.func,
  hideTooltip: PropTypes.func,
  index: PropTypes.number,
  // from HOC lang.hoc
  dir: PropTypes.string
}

function Input(props) {

  let field = undefined
  const setFieldRef = node => field = node

  const setClassLabelShort = () => {
    const {value, errors} = props
    if (!value.length) return `form-control__label-hide`
    else if (value.length && errors.length) return `form-control__label-show form-control__label--error`
    return `form-control__label-show`
  }

  const setClassLabel = () => {
    const {value, errors} = props
    if (!value.length && !errors.length) return `form-control__label-show`
    else if (!value.length && errors.length) return `form-control__label-show form-control__label--error`
    return `form-control__label-hide`
  }

  const setClassField = () => {
    const {errors} = props
    if (!errors.length) return
    return `form-control__field--error`
  }

  const onBlur = evt => {
    const {changeErrors, password, index} = props
    const {value, validation, hideTooltip, changeValidationRules} = props
    const errors = validate(value, validation, password)
    changeErrors(evt, errors, index)
    if (value.length && errors.length) {
      field.classList.remove(`form-control__field--error-enter`)
      field.classList.add(`form-control__field--error`)
    }
    if (changeValidationRules) hideTooltip()
  }

  const onFocus = evt => {
    const {validation, changeValidationRules, showTooltip, errors, value} = props
    const validationMessages = getValidateRules(validation)
    if (errors.length) {
      field.classList.remove(`form-control__field--error`)
      field.classList.add(`form-control__field--error-enter`)
    }
    if (changeValidationRules && !errors.length && value.length) return
    if (changeValidationRules) {
      changeValidationRules(evt, validationMessages)
      showTooltip()
    }
  }

  const renderErrors = () => {
    const {errors} = props
    return errors.map(error => {
      return (
        <div key={error} className="form-control__error">
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
    const {name, dir} = props
    return (
      <div className="form-control__validation-rules" dir={dir}>
        <div className="form-control__validation-rules-text">
          {`${capitalizeFirstLetter(name)} must meet`}
        </div>
        <ul className="form-control__validation-rules-list">
          {renderValidationRules()}
        </ul>
      </div>
    )
  }

  const {type, name, value, label, labelDone, changeValue, isOpen, errors, index, dir} = props
  return (
    <div className="form-control" dir={dir}>
      <input ref={setFieldRef}
        className={`form-control__field  ${setClassField()}`}
        type={type}
        name={name}
        id={index ? `${name + index}-id` : `${name}-id`}
        value={value}
        onChange={changeValue}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <span className={`form-control__label form-control__label--short ${setClassLabelShort()}`}>
        {labelDone}
      </span>
      <label className={`form-control__label ${setClassLabel()}`}
        htmlFor={index ? `${name + index}-id` : `${name}-id`}
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

export default multiLang(toggleTooltip(Input))