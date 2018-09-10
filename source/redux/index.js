import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import {history} from '../history'
import reducer from './reducer.index'

const middleware = routerMiddleware(history)



const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, middleware, (process.env.NODE_ENV === `development` ? logger : null)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export default store
