import {combineReducers} from 'redux'

import overlay from './reducers/overlay.reducer'
import header from './reducers/headerReducer';
import projects from './reducers/projects';
import { routerReducer as router } from 'react-router-redux';
import steps from './reducers/steps.reducer'
import pdf from './reducers/pdf.reducer'
import pageContent from './reducers/pageContent.reducer'
import totalAmount from './reducers/totalAmount'
import login from './reducers/loginUser.reducer'
//----------------------------------------------------
import allProjects from './reducers/getProjects.reducer'
import termsOfService from './reducers/getTermsOfService.reducer'
import settings from './reducers/getSettings.reducer'
import profile from './reducers/getMyProfileData.reducer'


import createNew from './reducers/getCreateNewProject.reducer'
import teamMember from './reducers/getTeamMemberEdit.reducer'

import allTeam from './reducers/getAllTeamEdit.reducer'

import pageContentGlobal from './reducers/pageContentGlobal.reducer'
import pageContentEnterpreneur from './reducers/getPageContentEnterpreneur.reducer'




export default combineReducers({
  router,
  overlay,
  header,
  projects,
  pageContent,
  totalAmount,
  steps,
  allProjects,
  termsOfService,
  settings,
  profile,
  allTeam,
  teamMember,
  createNew,
  pdf,
  pageContentGlobal,
  pageContentEnterpreneur,
    login
})
