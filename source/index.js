import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {history} from './history'
import store from './redux/index'
import './style/index.styl'

import HomePage from './pages/Home/Home.index'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HomePage />
    </ConnectedRouter>
  </Provider>,
  document.getElementById(`app`)
)