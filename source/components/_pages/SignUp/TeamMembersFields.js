import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import Input from '../../formFields/FormField.input'
import PhotoUploader from './SignUp.photoUploader'

TeamMembers.propTypes = {
  // from SignUp.entrepreneurFrom
  config: PropTypes.array,
  updateValue: PropTypes.func,
  updateErrors: PropTypes.func,
  deletePhoto: PropTypes.func,
  content: PropTypes.object
}

function TeamMembers(props) {

  const renderInputs = () => {
    const {config, updateErrors, updateValue, deletePhoto, content} = props

    return config.map((field, index) => {
      return (
        // eslint-disable-next-line
        <Fragment key={index}>
          <div className="sign-up__column sign-up__column--mb">
            <Input type="text"
              name="firstName"
              {...field.firstName}
              label={content[`team.first_name_field`]}
              labelDone={content[`team.first_name_field.label`]}
              validation={[`text`]}
              changeValue={event => updateValue(event, index)}
              changeErrors={updateErrors}
              index={index}
            />
            <Input type="text"
              name="lastName"
              {...field.lastName}
              label={content[`team.last_name_field`]}
              labelDone={content[`team.last_name_field.label`]}
              validation={[`text`]}
              changeValue={event => updateValue(event, index)}
              changeErrors={updateErrors}
              index={index}
            />
            <Input type="text"
              name="position"
              {...field.position}
              label={content[`team.position_field`]}
              labelDone={content[`team.position_field.label`]}
              validation={[`text`]}
              changeValue={event => updateValue(event, index)}
              changeErrors={updateErrors}
              index={index}
            />
            <Input type="text"
              name="linkFacebook"
              {...field.linkFacebook}
              label={content[`team.facebook_field`]}
              labelDone={content[`team.facebook_field.label`]}
              validation={[`facebook`]}
              changeValue={event => updateValue(event, index)}
              changeErrors={updateErrors}
              index={index}
            />
            <Input type="text"
              name="linkLinkedIn"
              {...field.linkLinkedIn}
              label={content[`team.linkedin_field`]}
              labelDone={content[`team.linkedin_field.label`]}
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
              content = {content}
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