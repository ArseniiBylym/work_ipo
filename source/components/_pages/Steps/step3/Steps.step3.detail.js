import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Steps.step3.detail.style.styl'

class PersonalDetail extends Component {

  static  propTypes = {
    // from Steps.step3
    dir: PropTypes.string
  }

  state = {
    firstName: window.localStorage.getItem(`stepCheck`) ? JSON.parse(window.localStorage.getItem(`stepCheck`)).firstName : ``,
    lastName: window.localStorage.getItem(`stepCheck`) ? JSON.parse(window.localStorage.getItem(`stepCheck`)).lastName : ``,
    email: window.localStorage.getItem(`stepCheck`) ? JSON.parse(window.localStorage.getItem(`stepCheck`)).email : ``,
    phone: window.localStorage.getItem(`stepCheck`) ? JSON.parse(window.localStorage.getItem(`stepCheck`)).phone : ``
  }

  render() {
    const {firstName, lastName, email, phone} = this.state
    const {dir} = this.props
    return (
      <div className="steps-page__personal-detail" dir={dir}>
        <div className="steps-page__personal-detail-left">
          <div className="steps-page__personal-detail-box">
            <div className="steps-page__personal-detail-title">
              First Name
            </div>
            <div className="steps-page__personal-detail-text">
              {firstName}
            </div>
          </div>
          <div className="steps-page__personal-detail-box">
            <div className="steps-page__personal-detail-title">
              Email
            </div>
            <div className="steps-page__personal-detail-text">
              {email}
            </div>
          </div>
        </div>
        <div className="steps-page__personal-detail-roght" >
          <div className="steps-page__personal-detail-box">
            <div className="steps-page__personal-detail-title">
              Last Name
            </div>
            <div className="steps-page__personal-detail-text">
              {lastName}
            </div>
          </div>
          <div className="steps-page__personal-detail-box">
            <div className="steps-page__personal-detail-title">
              Phone
            </div>
            <div className="steps-page__personal-detail-text">
              {phone}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default PersonalDetail