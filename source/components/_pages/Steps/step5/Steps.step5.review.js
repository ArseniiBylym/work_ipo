import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Steps.step5.review.style.styl'
import { withRouter } from 'react-router-dom'

Review.propTypes = {
  // from Step.index
  content: PropTypes.object,
  // from connect
  amount: PropTypes.number
}

function Review(props) {

  const data = {
    firstName: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).firstName : ``,
    lastName: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).lastName : ``,
    email: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).email : ``,
    phone: window.sessionStorage.getItem(`stepCheck`) ? JSON.parse(window.sessionStorage.getItem(`stepCheck`)).phone : ``,
    ownerName: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).ownerName : ``,
    projectName: props.match.params.projectName,
    accountNumber: window.sessionStorage.getItem(`stepBank`) ? JSON.parse(window.sessionStorage.getItem(`stepBank`)).accountNumber : ``,
    units: window.sessionStorage.getItem(`stepPurchase`) ? JSON.parse(window.sessionStorage.getItem(`stepPurchase`)).count : ``,
    signature: window.sessionStorage.getItem(`stepSignature`) ? window.sessionStorage.getItem(`stepSignature`) : ``
  }

  const renderPage = () => {
    const {amount, content} = props

    if (!content) return null

    return (
      <section className="steps-review">
        <div className="steps-review__wrapper">

          <table className="steps-review__inner">
            <tbody>
              <tr>
                <td className="steps-review__title">{content[`contact.first_name`]}</td>
                <td className="steps-review__text">{data.firstName}</td>
              </tr>
              <tr>
                <td className="steps-review__title">{content[`contact.last_name`]}</td>
                <td className="steps-review__text">{data.lastName}</td>
              </tr>
            </tbody>
          </table>

          <table className="steps-review__inner">
            <tbody>
              <tr>
                <td className="steps-review__title">{content[`contact.email`]}</td>
                <td className="steps-review__text">{data.email}</td>
              </tr>
              <tr>
                <td className="steps-review__title">{content[`contact.phone`]}</td>
                <td className="steps-review__text">{data.phone}</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="steps-review__wrapper">

          <table className="steps-review__inner">
            <tbody>
              <tr>
                <td className="steps-review__title">{content[`bank.account_owner_field.label`]}</td>
                <td className="steps-review__text">{data.ownerName}</td>
              </tr>
              <tr>
                <td className="steps-review__title">{content[`bank.account_number_field.label`]}</td>
                <td className="steps-review__text">{data.accountNumber}</td>
              </tr>
              <tr>
                <td className="steps-review__title">{content[`signin.project_name`]}</td>
                <td className="steps-review__text">{data.projectName}</td>
              </tr>
              <tr>
                <td className="steps-review__title">{content[`signin.number_of_units`]}</td>
                <td className="steps-review__text">{data.units}</td>
              </tr>
            </tbody>
          </table>

          <div className="steps-review__inner steps-review__inner--total">
            <div className="steps-review__text-wrapper">
              <div className="steps-review__title steps-review__title">
                {content[`signin.total_ils`]}
              </div>
              <div className="steps-review__text">{amount} {content[`purchase.ils`]}</div>
            </div>
          </div>
          <div className="steps-review__inner steps-review__inner--signature">
            <div className="steps-review__text-wrapper">
              <div className="steps-review__title">
                {content[`rewiew.signature`]}
              </div>
              <div className="steps-review__text">
                <img src={data.signature} alt={`signature ${data.firstName}`} />
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }

  return (
    <Fragment>
      {renderPage()}
    </Fragment>
  )

}

const mapStateToProps = state => ({amount: state.totalAmount})
const mapDispatchToProps = null

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Review)
)