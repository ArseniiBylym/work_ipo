import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../_HOC/lang.hoc'
import ReactSelect  from 'react-select'

Select.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  // from Form
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  updateValue: PropTypes.func.isRequired,
  labelDone: PropTypes.string.isRequired
}

function Select(props) {

  const {dir, value, selected, updateValue, placeholder, options, labelDone} = props
  return (
    <div style={{position: `relative`}} dir={dir}>
      {value && <span
        className={`form-control__label form-control__label--short form-control__label--short form-control__label-show`}>
        {labelDone}
            </span>}
      <ReactSelect isRtl={dir === `rtl`}
        className="select"
        options={options}
        placeholder={placeholder}
        value={selected}
        onChange={updateValue}
      />
    </div>
  )

}

export default multiLang(Select)