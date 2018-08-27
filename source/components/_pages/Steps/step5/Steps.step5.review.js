import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Steps.step5.review.style.styl'
import {withRouter} from 'react-router-dom'

Review.propTypes = {}


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

  return (
    <section className="steps-review">
      <div className="steps-review__wrapper">

        <table className="steps-review__inner">
          <tbody>
            <tr>
              <td className="steps-review__title">First Name</td>
              <td className="steps-review__text">{data.firstName}</td>
            </tr>
            <tr>
              <td className="steps-review__title">Last Name</td>
              <td className="steps-review__text">{data.lastName}</td>
            </tr>
          </tbody>
        </table>

        <table className="steps-review__inner">
          <tbody>
            <tr>
              <td className="steps-review__title">Email</td>
              <td className="steps-review__text">{data.email}</td>
            </tr>
            <tr>
              <td className="steps-review__title">Phone</td>
              <td className="steps-review__text">{data.phone}</td>
            </tr>
          </tbody>
        </table>

      </div>
      <div className="steps-review__wrapper">

        <table className="steps-review__inner">
          <tbody>
            <tr>
              <td className="steps-review__title">Bank Account Owner Name</td>
              <td className="steps-review__text">{data.ownerName}</td>
            </tr>
            <tr>
              <td className="steps-review__title">Account Number</td>
              <td className="steps-review__text">{data.accountNumber}</td>
            </tr>
            <tr>
              <td className="steps-review__title">Project Name</td>
              <td className="steps-review__text">{data.projectName}</td>
            </tr>
            <tr>
              <td className="steps-review__title">Number of Units</td>
              <td className="steps-review__text">{data.units}</td>
            </tr>
          </tbody>
        </table>

        <div className="steps-review__inner steps-review__inner--total">
          <div className="steps-review__text-wrapper">
            <div className="steps-review__title steps-review__title">
              Total amount
            </div>
            <div className="steps-review__text">100000 ils</div>
          </div>
        </div>
        <div className="steps-review__inner steps-review__inner--signature">
          <div className="steps-review__text-wrapper">
            <div className="steps-review__title">
              Signature
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

export default withRouter(Review)