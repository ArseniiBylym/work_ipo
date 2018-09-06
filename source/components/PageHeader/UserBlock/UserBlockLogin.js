import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from "../../../redux/reducers/loginUser.reducer"

// style
import './UsertBlockLogin.styl'

UserBlockLogin.propTypes = {
  // from connect
  logout: PropTypes.func
}

function UserBlockLogin (props) {

  const logout = event => {
    event && event.preventDefault && event.preventDefault()

    const {logout} = props

    logout()
  }

  return (
    <div>
      <button type = "button" onClick = {logout}>Logout</button>
    </div>
  )

}

const mapStateToProps = null
const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(UserBlockLogin)