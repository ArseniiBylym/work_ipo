import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Steps.style.styl'

import ContentSection from '../../ContentSection/ContentSection.index'
import Container from '../../grid/Container/Container.index'
import Steps from '../../Steps/Steps.index'
import Step from '../../Steps/Steps.item'
import Step1 from './step1/Steps.step1'
import Step1LogIn from './step1/Steps.step1.logIn'
import Step1Registration from './step1/Steps.step1.registration'
import Step2 from './step2/Steps.step2'
import Step3 from './step3/Steps.step3'
import Step4 from './step4/Steps.step4'
import Step5 from './step5/Steps.step5'

class PageSteps extends Component {

  static propTypes = {
    // from App.routes
    projectId: PropTypes.string,
    projectName: PropTypes.string
  }

  state = {
    activeStepIndex: 0,
    isCheck: false,
    isLogIn: false, // fake variable (it will be from redux)
    isModalOpen: false
  }

  openModal = () => this.setState({isModalOpen: true})
  closeModal = () => this.setState({isModalOpen: false})

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


  setActiveStep = (index) => {
    this.setState({
      activeStepIndex: index
    })
  }

  personalDetailsChecked = () => {
    this.setState({
      isCheck: true
    })
  }

  renderFirstStep = () => {
    const {isCheck, isLogIn, isModalOpen} = this.state

    if (isCheck && isLogIn) return (
      <Step1LogIn nextStep={this.nextStep}
        openModal={this.openModal}
        closeModal={this.closeModal}
        isModalOpen={isModalOpen}
      />
    )
    if (isCheck && !isLogIn) return <Step1Registration nextStep={this.nextStep} />
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
            setActiveStep={this.setActiveStep}
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