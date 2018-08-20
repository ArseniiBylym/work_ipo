import {combineReducers} from 'redux'

import overlay from './reducers/overlay.reducer'
import steps from './reducers/steps.reducer'
import pageContent from './reducers/pageContent.reducer'

export default combineReducers({
  pageContent,
  steps,
  overlay
})