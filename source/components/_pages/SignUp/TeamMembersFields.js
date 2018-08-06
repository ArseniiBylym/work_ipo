import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import './TeamMembersFields.styl'

import Input from '../../formFields/FormField.input'
import PhotoUploader from './SignUp.photoUploader'

class TeamMembers extends Component {

  static propTypes = {
    // from SignUp.entrepreneurFrom
    config: PropTypes.array,
    updateValue: PropTypes.func,
    updateErrors: PropTypes.func,
  }

  state = {
    preview: true
  }

  hidePreview = evt => {
    evt && evt.preventDefault && evt.preventDefault()
    this.setState({
      preview: false
    })
  }

  showPreview = () => {
    this.setState({
      preview: true
    })
  }

  onChangeValue = (event, index) => {
    const {updateValue} = this.props
    updateValue(event, index)
    this.showPreview()
  }

  renderInputs = () => {
    const {config, updateErrors, updateValue} = this.props
    const {preview} = this.state

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
          <div className="sign-up__column sign-up__column--mb">
            <PhotoUploader name="photo"
              {...field.photo}
              src={preview ? field.photo.value : ``}
              alt={field.lastName.value}
              changeValue={event => this.onChangeValue(event, index)}
              index={index}
              hidePreview={this.hidePreview}
            />
          </div>
        </Fragment>

      )
    })
  }

  render() {
    return (
      <Fragment>
        {this.renderInputs()}
      </Fragment>
    )
  }

}

export default TeamMembers