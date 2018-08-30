import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addAmount } from '../../../../redux/reducers/totalAmount'
import { withRouter } from 'react-router-dom'
import './Steps.step4.detail.style.styl'

class PersonalDetail extends Component {

  static  propTypes = {
    // from Steps.step3
    dir: PropTypes.string,
    content: PropTypes.object,
    project: PropTypes.object,
    // from connect
    addAmount: PropTypes.func
  }

  state = {
    account: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).ownerName : ``,
    projectName: this.props.match.params.projectName,
    accountNumber: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).accountNumber : ``,
    units: window.sessionStorage.getItem(`stepPurchase`) ? JSON.parse(window.sessionStorage.getItem(`stepPurchase`)).count : ``
  }

  calculateTotal = () => {
    const {project, addAmount} = this.props
    const {units} = this.state

    const total = +project[`min_unit_price`] * +units
    addAmount(total)
    return (total)
  }

  renderPage = () => {
    const {account, projectName, accountNumber, units} = this.state
    const {dir, content, project} = this.props

    if (!content || !project) return null

    return (
      <div className="steps-page__personal-detail steps-page__personal-detail--step-4" dir={dir}>
        <div className="steps-review__wrapper">

          <table className="steps-review__inner">
            <tbody>
              <tr>
                <td className="steps-review__title">{content[`signin.account_owner_label`]}</td>
                <td className="steps-review__text">{account}</td>
              </tr>
              <tr>
                <td className="steps-review__title">{content[`signin.account_number_label`]}</td>
                <td className="steps-review__text">{accountNumber}</td>
              </tr>
              <tr>
                <td className="steps-review__title">{content[`signin.project_name`]}</td>
                <td className="steps-review__text">{projectName}</td>
              </tr>
              <tr>
                <td className="steps-review__title">{content[`signin.number_of_units`]}</td>
                <td className="steps-review__text">{units}</td>
              </tr>
            </tbody>
          </table>

          <div className="steps-review__inner steps-review__inner--total">
            <div className="steps-review__text-wrapper">
              <div className="steps-review__title">
                {content[`signin.total_ils`]}
              </div>
              <div className="steps-review__text">{this.calculateTotal()} {content[`purchase.ils`]}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderPage()}
      </Fragment>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {addAmount}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PersonalDetail)
)