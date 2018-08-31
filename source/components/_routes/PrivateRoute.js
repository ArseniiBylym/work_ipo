import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRouter(props) {
  const {component: Component, ...rest} = props

  const renderComponent = () => {
    if (auth.getToken !== null) {
      return <Component {...props} />
    }
    return <Redirect to = "/home" />
  }

  return (
    <Route {...rest} render = {renderComponent()} />
  )
}

export default PrivateRouter