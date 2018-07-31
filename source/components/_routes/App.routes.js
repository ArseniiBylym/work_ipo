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

function AppRoutes() {

  const projectPage = routeObj => {
    const {match} = routeObj
    const {id} = match.params
    return (
      <ProjectPage projectId={id} />
    )
  }

  return (
    <Switch>
      <Route path={`/home`}
        component={HomePage}
        exact
      />
      <Route path={`/home/:projectName/:id`}
        render={projectPage}
        exact
      />
      <Route path={`/tutorial`}
        component={TutorialPage}
        exact
      />
      <Route path={`/tutorial/description`}
        component={HowDoesItWorkPage}
        exact
      />
      <Route path={`/about`} component={AboutPage} />
      <Route path={`/entrepreneur-seeking-funding`} component={EntrepreneurSeekingFundingPage} />
      <Route path={`/contacts`} component={ContactsPage} />
      <Route path={`/log-in`} component={LogInPage} />
      <Route path={`/sign-up`} component={SignUpPage} />
      <Route path={`/terms-of-service`} component={TermsOfServicePage} />
      <Redirect from={`/`} to={`/home`} />
    </Switch>
  )

}

export default AppRoutes