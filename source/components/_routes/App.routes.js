import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import HomePage from '../_pages/Home/Home.index'
import TutorialPage from '../_pages/Tutorial/Tutorial.index'
import HowDoesItWorkPage from '../_pages/Tutorial/HowDoesItWork/HowDoesItWork.index'
import AboutPage from '../_pages/About/About.index'
import EntrepreneurSeekingFundingPage from '../_pages/EntrepreneurSeekingFunding/EntrepreneurSeekingFunding.index'
import ContactsPage from '../_pages/Contacts/Contacts.index'
import LogInPage from '../_pages/LogIn/LogIn.index'
import SignUpPage from '../_pages/SignUp/SignUp.index'
import ProjectPage from '../_pages/Project/Project.index'
import TermsOfServicePage from '../_pages/TermsOfService/TermsOfService.index'
import StepsPage from '../_pages/Steps/Steps.index'
import PasswordRecovery from '../_pages/LogIn/PasswordRecovery/index'

import Dashboard from '../_pages/Dashboard'

function AppRoutes() {

  const projectPage = routeProps => {
    const {match} = routeProps
    const {id, projectName} = match.params
    return (
      <ProjectPage projectId={id} projectName={projectName}/>
    )
  }

  const stepsPage = routeProps => {
    const {match} = routeProps
    const {id, projectName} = match.params
    return (
      <StepsPage projectId={id} projectName={projectName}/>
    )
  }

  const tutorialPage = () => {
    const showVideo = window.localStorage.getItem(`video`) || ``

    return showVideo ? <HowDoesItWorkPage/> : <TutorialPage/>
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path={`/dash`} component={Dashboard}/>
        <Route path={`/home`}
               component={HomePage}
               exact
        />
        <Route path={`/home/:projectName/:id`}
               render={projectPage}
               exact
        />
        <Route path={`/tutorial`}
               render={tutorialPage}
               exact
        />
        <Route path={`/tutorial/description`}
               component={HowDoesItWorkPage}
               exact
        />
        <Route path={`/about`} component={AboutPage}/>
        <Route path={`/entrepreneur-seeking-funding`} component={EntrepreneurSeekingFundingPage}/>
        <Route path={`/contacts`} component={ContactsPage}/>
        <Route path={`/log-in`} component={LogInPage}/>
        <Route path={`/sign-up`} component={SignUpPage}/>
        <Route path={`/terms-of-service`} component={TermsOfServicePage}/>
        <Route path={`/home/:projectName/:id/steps`}
               render={stepsPage}
               exact
        />
        <Route path = {`/password-recovery/:token`} component = {PasswordRecovery} />
        <Redirect from={`/`} to={`/home`}/>
      </Switch>

    </React.Fragment>
  )

}

export default AppRoutes
