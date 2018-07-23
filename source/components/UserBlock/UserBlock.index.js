import React from 'react'
import {Link} from 'react-router-dom'
import './UserBlock.style.styl'

function UserBlock() {

  return (
    <div className="user-block">
      <Link to={`/log-in`} className="user-block__link">log in</Link>
      <Link to={`/sign-up`} className="user-block__button">sign up</Link>
    </div>
  )

}

export default UserBlock