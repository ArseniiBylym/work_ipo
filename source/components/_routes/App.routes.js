import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import HomePage from '../_pages/Home/Home.index'

function AppRoutes() {

  return (
    <Switch>
      <Route path={`/home`} component={HomePage} />
      <Redirect from={`/`} to={`/home`} />
    </Switch>
  )

}

export default AppRoutes