import {combineReducers} from 'redux'

import overlay from './reducers/overlay.reducer'
import header from './reducers/headerReducer';
import projects from './reducers/projects';
import { routerReducer as router } from 'react-router-redux';
import steps from './reducers/steps.reducer'
import pageContent from './reducers/pageContent.reducer'

export default combineReducers({
  router,
  overlay,
  header,
  projects,
  pageContent,
  steps,
})
