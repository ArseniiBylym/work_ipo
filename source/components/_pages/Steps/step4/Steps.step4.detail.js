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
    account: window.localStorage.getItem(`stepBank`) ? JSON.parse(window.localStorage.getItem(`stepBank`)).ownerName : ``,
    projectName: this.props.match.params.projectName,
    accountNumber: window.localStorage.getItem(`stepBank`) ? JSON.parse(window.localStorage.getItem(`stepBank`)).accountNumber : ``,
    units: window.localStorage.getItem(`stepPurchase`) ? JSON.parse(window.localStorage.getItem(`stepPurchase`)).count : ``
  }

  render() {
    const {account, projectName, accountNumber, units} = this.state
    const {dir} = this.props

    return (
      <div className="steps-page__personal-detail steps-page__personal-detail--step-4" dir={dir}>
        <div className="steps-page__personal-detail-left steps-page__personal-detail-left--no-pl">
          <div className="steps-page__personal-detail-box">
            <div className="steps-page__personal-detail-title">
              Bank Account Owner Name
            </div>
            <div className="steps-page__personal-detail-text">
              {account}
            </div>
          </div>
          <div className="steps-page__personal-detail-box">
            <div className="steps-page__personal-detail-title">
              Account Number
            </div>
            <div className="steps-page__personal-detail-text">
              {accountNumber}
            </div>
          </div>
          <div className="steps-page__personal-detail-box">
            <div className="steps-page__personal-detail-title">
              Project Name
            </div>
            <div className="steps-page__personal-detail-text">
              {projectName}
            </div>
          </div>
          <div className="steps-page__personal-detail-box">
            <div className="steps-page__personal-detail-title">
              Number of Units
            </div>
            <div className="steps-page__personal-detail-text">
              {units} units
            </div>
          </div>
        </div>
        <div className="steps-page__personal-detail-roght">
          <div className="steps-page__personal-detail-box steps-page__personal-detail-box--bordered">
            <div className="steps-page__personal-detail-title">
              Total amount
            </div>
            <div className="steps-page__personal-detail-text steps-page__personal-detail-text--big">
              {units} ILS
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