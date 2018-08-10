import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Steps.style.styl'

import ContentSection from '../../ContentSection/ContentSection.index'
import Container from '../../grid/Container/Container.index'
import Steps from '../../Steps/Steps.index'
import Step from '../../Steps/Steps.item'
import Step1 from './Steps.step1'
import Step1LogIn from './Steps.step1.logIn'
import Step1Registration from './Steps.step1.registration'
import Step2 from './Steps.step2'
import Step3 from './Steps.step3'
import Step4 from './Steps.step4'
import Step5 from './Steps.step5'

class PageSteps extends Component {

  static propTypes = {
    // from App.routes
    projectId: PropTypes.string,
    projectName: PropTypes.string
  }

  state = {
    activeStepIndex: 0,
    isCheck: false,
    isLogIn: true // fake variable (it will be from redux)
  }

  nextStep = () => {
    this.setState(prevState => {
      return {
        activeStepIndex: prevState.activeStepIndex + 1
      }
    })
  }

  prevStep = () => {
    this.setState(prevState => {
      return {
        activeStepIndex: prevState.activeStepIndex === 0 ? prevState.activeStepIndex : prevState.activeStepIndex - 1
      }
    })
  }

  personalDetailsChecked = () => {
    this.setState({
      isCheck: true
    })
  }

  renderFirstStep = () => {
    const {isCheck, isLogIn} = this.state

    if (isCheck && isLogIn) return <Step1LogIn nextStep={this.nextStep} />
    if (isCheck && !isLogIn) return <Step1Registration nextStep={this.nextStep} prevStep={this.prevStep} />
    if (!isCheck) return <Step1 checkedDetail={this.personalDetailsChecked} />
  }

  render() {
    const {activeStepIndex, isCheck} = this.state
    const {projectId, projectName} = this.props
    return (
      <Container>
        <ContentSection className={`steps-page`}>
          <header className="content-section__header">
            <h1 className="content-section__title">
              Steps
            </h1>
          </header>
          <Steps activeStepIndex={activeStepIndex}
            isCheck={isCheck}
            nextStep={this.nextStep}
          >
            <Step title={`Personal details`}>
              {this.renderFirstStep()}
            </Step>
            <Step title={`Bank details`}>
              <Step2 nextStep={this.nextStep} prevStep={this.prevStep} />
            </Step>
            <Step title={`Purchase page`}>
              <Step3 nextStep={this.nextStep} prevStep={this.prevStep} />
            </Step>
            <Step title={`Sign In`}>
              <Step4 nextStep={this.nextStep} prevStep={this.prevStep} />
            </Step>
            <Step title={`Review & Send`}>
              <Step5 projectId={projectId} projectName={projectName} />
            </Step>
          </Steps>
        </ContentSection>
      </Container>
    )
  }

}

export default PageSteps