import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from "../../../redux/reducers/loginUser.reducer"
import {Link} from 'react-router-dom'

// style
import './UsertBlockLogin.styl'
import icon from './images/profile.svg'

UserBlockLogin.propTypes = {
  // from connect
  logout: PropTypes.func,
  // from PageHeader.index
  contentText: PropTypes.object
}

function UserBlockLogin(props) {

  const userType = window.localStorage.getItem(`user-type`) ? window.localStorage.getItem(`user-type`) : ``
  const userId = window.localStorage.getItem(`user-id`) ? window.localStorage.getItem(`user-id`) : ``

  const logout = event => {
    event && event.preventDefault && event.preventDefault()

    const {logout} = props

    logout()
  }

  const {contentText} = props
  return (
    <div className="user-block-login__wrapper">
      <div className="user-block-login__column">
        <div className="user-block-login__image-wrapper">
          <img src={icon} alt="" />
        </div>
        <div className="user-block-login__name">
          {window.localStorage.getItem(`user-name`)}
        </div>

        <div className="user-block-login__hover-wrapper">
          <ul className="user-block-login__list">
            <li className="user-block-login__item">
              <Link to={`/dash/${userType}/${userId}/profile`} className="user-block-login__link">
                {contentText[`menu.my_profile`]}
              </Link>
            </li>
            <li className="user-block-login__item">
              <Link to={`/dash/${userType}/${userId}/settings`} className="user-block-login__link">
                {contentText[`menu.settings`]}
              </Link>
            </li>
            <li className="user-block-login__item">
              <a href="#"
                 onClick={logout}
                 className="user-block-login__link"
              >
                {contentText[`menu.log_out`]}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )

}

const mapStateToProps = null
const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(UserBlockLogin)