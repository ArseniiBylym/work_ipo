import {combineReducers} from 'redux'

import overlay from './reducers/overlay.reducer'
import homePage from './reducers/home-page.reducer'

export default combineReducers({
  homePage,
  overlay
})