import {combineReducers} from 'redux'

import overlay from './reducers/overlay.reducer'
import steps from './reducers/steps.reducer'
import homePage from './reducers/home-page.reducer'

export default combineReducers({
  homePage,
  steps,
  overlay
})