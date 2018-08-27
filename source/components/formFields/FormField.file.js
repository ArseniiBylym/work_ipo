import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../_HOC/lang.hoc'
import {validate} from './validate'

InputFile.propTypes = {
  // from Form
  name: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  updateValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelDone: PropTypes.string.isRequired,
  validation: PropTypes.array,
  updateErrors: PropTypes.func,
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function InputFile(props) {

  let inputFile = null
  const setInputFileRef = node => inputFile = node

  const renderMark = () => {
    const {value, errors, labelDone} = props

    if (!value.length) return
    return (
      <span className={`input-file__mark ${errors.length ? 'input-file__mark--error' : '' }`}>
        {labelDone}
      </span>
    )
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

  const onUpdateValue = event => {
    // console.log(event.target.value)

    const {updateErrors, updateValue, validation, name} = props
    const file = event.target.files[0]
    Promise.resolve(updateValue(event, file))
      .then(() => {
        const errors = validate(file, validation)
        updateErrors(name, errors)
      })
  }
  // TODO when send to serve replace value on value.name {value.length ? value : label}
  const {name, errors, label, value, dir} = props
  return (
    <div className="input-file" dir={dir}>
      <label className="input-file__label">
        <span className={`input-file__placeholder
          ${value.length ? 'input-file__placeholder--value' : '' }
          ${errors.length ? 'input-file__placeholder--error' : ''}
          `}>
          {value.length ? value : label}
        </span>
        {renderMark()}
        <input className="input-file__field"
          id={props.id}
          onClick={props.clickInput}
          type="file"
          name={name}
          ref={setInputFileRef}
          onChange={onUpdateValue}
        />
      </label>
      {errors.length ? renderErrors() : null}
    </div>
  )


}

export default multiLang(InputFile)