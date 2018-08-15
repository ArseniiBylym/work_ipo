import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Steps.step3.detail.style.styl'

class PersonalDetail extends Component {

  static  propTypes = {
    // from Steps.step3
    dir: PropTypes.string
  }

  state = {
    firstName: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).firstName : ``,
    lastName: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).lastName : ``,
    email: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).email : ``,
    phone: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).phone : ``
  }

  render() {
    const {firstName, lastName, email, phone} = this.state
    const {dir} = this.props
    return (
      <div className="steps-page__personal-detail" dir={dir}>
        <div className="steps-review__wrapper">
          <table className="steps-review__inner">
            <tbody>
              <tr>
                <td className="steps-review__title">First Name</td>
                <td className="steps-review__text">{firstName}</td>
              </tr>
              <tr>
                <td className="steps-review__title">Last Name</td>
                <td className="steps-review__text">{lastName}</td>
              </tr>
            </tbody>
          </table>

          <table className="steps-review__inner">
            <tbody>
              <tr>
                <td className="steps-review__title">Email</td>
                <td className="steps-review__text">{email}</td>
              </tr>
              <tr>
                <td className="steps-review__title">Phone</td>
                <td className="steps-review__text">{phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default PersonalDetail