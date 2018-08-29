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
  content: PropTypes.object
}

function Step3Form(props) {

  const {
    count,
    id,
    changeErrors,
    onCangeValue,
    submit,
    plus,
    minus,
    dir,
    content
  } = props

  return (
    <form className="steps-page__form"
      id={id}
      noValidate
      onSubmit={submit}
    >
      <div className="steps-page__field-wrapper steps-page__field-wrapper--center steps-page__field-wrapper--count">
        <div className="steps-page__count-text" dir={dir}>
          1 {content[`purchase.unit`]} = 10 {content[`purchase.ils`]}
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
            label={content[`purchase.unit_field`]}
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
          {content[`puchase.total`]} = 1000 {content[`purchase.ils`]}
        </div>
      </div>
    </form>
  )

}

export default Step3Form