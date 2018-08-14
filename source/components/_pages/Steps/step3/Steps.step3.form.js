import React from 'react'
import PropTypes from 'prop-types'

import Input from '../../../formFields/FormField.input'

Step3Form.propTypes = {
  // from Steps.step3
  dir: PropTypes.string,
  id: PropTypes.string,
  count: PropTypes.any,
  submit: PropTypes.func,
  changeErrors: PropTypes.func,
  onCangeValue: PropTypes.func,
  plus: PropTypes.func,
  minus: PropTypes.func,
}

function Step3Form(props) {

  const {count, id, changeErrors, onCangeValue, submit, plus, minus, dir} = props
  return (
    <form className="steps-page__form"
      id={id}
      noValidate
      onSubmit={submit}
    >
      <div className="steps-page__field-wrapper steps-page__field-wrapper--center steps-page__field-wrapper--count">
        <div className="steps-page__count-text" dir={dir}>
          1 UNIT = 10 ILS
        </div>

        <button className="button button-count button-count--minus"
          type="button"
          onClick={minus}
        >
          -
        </button>
        <div className="steps-page__control-wrapper steps-page__control-wrapper--count">
          <Input type="text"
            name="count"
            {...count}
            label="Enter a number of units"
            labelDone="Units"
            validation={[`required`, `onlyNumber`, `minCount`]}
            changeValue={onCangeValue}
            changeErrors={changeErrors}
          />
        </div>
        <button className="button button-count button-count--plus"
          type="button"
          onClick={plus}
        >
          +
        </button>

        <div className="steps-page__count-text" dir={dir}>
          TOTAL = 1000 ILS
        </div>
      </div>
    </form>
  )

}

export default Step3Form