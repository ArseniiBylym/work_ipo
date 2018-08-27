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
    const {config, updateErrors, updateValue, deletePhoto, clickInput} = props

    return config.map((field, index) => {
      // console.log(index)
      return (
        // eslint-disable-next-line
        <Fragment key={index}>
              {isShowPosition && <div className='positionIndex'>{index + 1} of {len} Members</div>}
             <div className="sign-up__column sign-up__column--mb">
              <Input type="text"
                name="firstName"
                {...field.firstName}
                label="Enter Team Member First Name"
                labelDone="First Name"
                validation={[`text`]}
                changeValue={event => updateValue(event, index)}
                changeErrors={updateErrors}
                index={index}
              />
              <Input type="text"
                name="position"
                {...field.position}
                label="Enter Position of a Team Member"
                labelDone="Position"
                validation={[`text`]}
                changeValue={event => updateValue(event, index)}
                changeErrors={updateErrors}
                index={index}
              />
              <Input type="text"
                name="linkFacebook"
                {...field.linkFacebook}
                label="Enter a Link to Facebook"
                labelDone="Facebook"
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
                label="Enter Team Member Last Name"
                labelDone="Last Name"
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
                label={`Upload Photo of a Team Member`}
                labelDone={`Member photo`}
                validation={[`maxSize`]}
                updateErrors={updateErrors}
               
              />
              <Input type="text"
                name="linkLinkedIn"
                {...field.linkLinkedIn}
                label="Enter a Link to LinkedIn"
                labelDone="LinkedIn"
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