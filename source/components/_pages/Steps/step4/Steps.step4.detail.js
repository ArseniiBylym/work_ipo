import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import './Steps.step4.detail.style.styl'

class PersonalDetail extends Component {

  static  propTypes = {
    // from Steps.step3
    dir: PropTypes.string
  }

  state = {
    account: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).ownerName : ``,
    projectName: this.props.match.params.projectName,
    accountNumber: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).accountNumber : ``,
    units: window.sessionStorage.getItem(`stepPurchase`) ? JSON.parse(window.sessionStorage.getItem(`stepPurchase`)).count : ``
  }

  render() {
    const {account, projectName, accountNumber, units} = this.state
    const {dir} = this.props

    return (
      <div className="steps-page__personal-detail steps-page__personal-detail--step-4" dir={dir}>
        <div className="steps-review__wrapper">

          <table className="steps-review__inner">
            <tbody>
              <tr>
                <td className="steps-review__title">Bank Account Owner Name</td>
                <td className="steps-review__text">{account}</td>
              </tr>
              <tr>
                <td className="steps-review__title">Account Number</td>
                <td className="steps-review__text">{accountNumber}</td>
              </tr>
              <tr>
                <td className="steps-review__title">Project Name</td>
                <td className="steps-review__text">{projectName}</td>
              </tr>
              <tr>
                <td className="steps-review__title">Number of Units</td>
                <td className="steps-review__text">{units}</td>
              </tr>
            </tbody>
          </table>

          <div className="steps-review__inner steps-review__inner--total">
            <div className="steps-review__text-wrapper">
              <div className="steps-review__title">
                Total amount
              </div>
              <div className="steps-review__text">100000 ils</div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default withRouter(
  PersonalDetail
)