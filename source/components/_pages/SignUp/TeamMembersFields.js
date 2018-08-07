import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import Input from '../../formFields/FormField.input'
import PhotoUploader from './SignUp.photoUploader'

TeamMembers.propTypes = {
  // from SignUp.entrepreneurFrom
  config: PropTypes.array,
  updateValue: PropTypes.func,
  updateErrors: PropTypes.func,
  deletePhoto: PropTypes.func
}

function TeamMembers(props) {

  const renderInputs = () => {
    const {config, updateErrors, updateValue, deletePhoto} = props

    return config.map((field, index) => {
      return (
        // eslint-disable-next-line
        <Fragment key={index}>
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
              name="lastName"
              {...field.lastName}
              label="Enter Team Member Last Name"
              labelDone="Last Name"
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
          <div className="sign-up__column sign-up__column--mb sign-up__column--pt">
            <PhotoUploader name="photo"
              {...field.photo}
              src={field.photo.value}
              alt={field.lastName.value}
              changeValue={updateValue}
              index={index}
              deletePhoto={deletePhoto}
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

export default TeamMembers