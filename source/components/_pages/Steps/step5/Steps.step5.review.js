import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class Review extends Component {

  static propTypes = {}

  state = {
    firstName: window.localStorage.getItem(`stepCheck`) ? JSON.parse(window.localStorage.getItem(`stepCheck`)).firstName : ``,
    lastName: window.localStorage.getItem(`stepCheck`) ? JSON.parse(window.localStorage.getItem(`stepCheck`)).lastName : ``,
    email: window.localStorage.getItem(`stepCheck`) ? JSON.parse(window.localStorage.getItem(`stepCheck`)).email : ``,
    phone: window.localStorage.getItem(`stepCheck`) ? JSON.parse(window.localStorage.getItem(`stepCheck`)).phone : ``,
    account: window.localStorage.getItem(`stepBank`) ? JSON.parse(window.localStorage.getItem(`stepBank`)).ownerName : ``,
    projectName: this.props.match.params.projectName,
    accountNumber: window.localStorage.getItem(`stepBank`) ? JSON.parse(window.localStorage.getItem(`stepBank`)).accountNumber : ``,
    units: window.localStorage.getItem(`stepPurchase`) ? JSON.parse(window.localStorage.getItem(`stepPurchase`)).count : ``,
    signature: window.localStorage.getItem(`stepSignature`) ? JSON.parse(window.localStorage.getItem(`stepSignature`)).count : ``,
  }

  render() {
    return (
      <section>
        
      </section>
    )
  }

}

export default withRouter(Review)