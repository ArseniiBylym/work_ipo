import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {history} from './history'
import store from './redux/index'
import 'babel-polyfill'
import 'babel-core/register'
import './style/_index.styl'

import App from './components/App/App.index'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById(`app`)
)