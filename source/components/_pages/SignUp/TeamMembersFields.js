import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import './TeamMembersFields.styl'

TeamMembers.propTypes = {
  // from SignUp.entrepreneurFrom
  config: PropTypes.array,
  updateValue: PropTypes.func
}

function TeamMembers(props) {

  const renderInputs = () => {
    const {config, updateValue} = props

    return config.map((field, index) => {
      return (
        <div key={index}>
          <div className="sign-up__column">
            <input type="text" name="firstName" value={field.firstName} onChange={event => updateValue(event, index)} />
            <input type="text" name="lastName" value={field.lastName} onChange={event => updateValue(event, index)} />
            <input type="text" name="position" value={field.position} onChange={event => updateValue(event, index)} />
            <input type="text" name="linkFacebook" value={field.linkFacebook} onChange={event => updateValue(event, index)} />
            <input type="text" name="linkLinkedIn" value={field.linkLinkedIn} onChange={event => updateValue(event, index)} />
          </div>
         <div className="sign-up__column">
           <input type="file" name="photo" value={config.photo} onChange={event => updateValue(event, index)} />
         </div>
        </div>
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