import {combineReducers} from 'redux'

import overlay from './reducers/overlay.reducer'
import steps from './reducers/steps.reducer'
import pageContent from './reducers/pageContent.reducer'
import totalAmount from './reducers/totalAmount'

export default combineReducers({
  pageContent,
  totalAmount,
  steps,
  overlay
})