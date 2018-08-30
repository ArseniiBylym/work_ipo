import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './NewTeamMember.styl'

import Input from '../../../../../formFields/FormField.input';
import InputFile from '../../../../../formFields/FormField.file';

NewTeamMember.propTypes = {
  // from SignUp.entrepreneurFrom
  config: PropTypes.array,
  updateValue: PropTypes.func,
  updateErrors: PropTypes.func,
}

function NewTeamMember(props) {
  const len = props.config.length
  const isShowPosition = props.showPosition

  const renderInputs = () => {
    const {config, updateErrors, updateValue, deletePhoto, clickInput, data} = props

    return config.map((field, index) => {
      // console.log(index)
      return (
        // eslint-disable-next-line
        <Fragment key={index}>
              {isShowPosition && <div className='positionIndex'>{index + 1} {data.of} {len} {data.members}</div>}
             <div className="sign-up__column sign-up__column--mb">
              <Input type="text"
                name="firstName"
                {...field.firstName}
                label={data[`team.first_name_field`]}
                labelDone={data[`team.first_name_field.label`]}
                validation={[`text`]}
                changeValue={event => updateValue(event, index)}
                changeErrors={updateErrors}
                index={index}
              />
              <Input type="text"
                name="position"
                {...field.position}
                label={data[`team.position_field`]}
                labelDone={data[`team.position_field.label`]}
                validation={[`text`]}
                changeValue={event => updateValue(event, index)}
                changeErrors={updateErrors}
                index={index}
              />
              <Input type="text"
                name="linkFacebook"
                {...field.linkFacebook}
                label={data[`team.facebook_field`]}
                labelDone={data[`team.facebook_field.label`]}
                validation={[`facebook`]}
                changeValue={event => updateValue(event, index)}
                changeErrors={updateErrors}
                index={index}
              />
            </div>
            <div className='NewTeamMember__group'>
              <Input type="text"
                name="lastName"
                {...field.lastName}
                label={data[`team.last_name_field`]}
                labelDone={data[`team.last_name_field.label`]}
                validation={[`text`]}
                changeValue={event => updateValue(event, index)}
                changeErrors={updateErrors}
                index={index}
              />
              <InputFile 
                name="photo"
                clickInput={clickInput}
                {...field.photo}
                id={field.id}
                updateValue={event => updateValue(event, index)}
                label={data[`team.photo_field`]}
                labelDone={data[`team.photo_label`]}
                validation={[`maxSize`]}
                updateErrors={updateErrors}
               
              />
              <Input type="text"
                name="linkLinkedIn"
                {...field.linkLinkedIn}
                label={data[`team.linkedin_field`]}
                labelDone={data[`team.linkedin_field.label`]}
                validation={[`linkedIn`]}
                changeValue={event => updateValue(event, index)}
                changeErrors={updateErrors}
                index={index}
              />
            </div>
        </Fragment>

      )
    })
  }


  return (
    <Fragment>
      {renderInputs()}
    </Fragment>
  )

}

export default NewTeamMember