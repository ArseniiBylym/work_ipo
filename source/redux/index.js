import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {routerReducer as router, routerMiddleware} from 'react-router-redux'
import {history} from '../history'
import reducer from './reducer.index'

const middleware = routerMiddleware(history)

const store = createStore(
  reducer,
  router,
  applyMiddleware(thunk, middleware, logger)
)

export default store