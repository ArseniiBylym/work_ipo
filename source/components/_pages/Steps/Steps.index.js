import React, {Component} from 'react'
import './Steps.style.styl'

import ContentSection from '../../ContentSection/ContentSection.index'
import Container from '../../grid/Container/Container.index'
import Steps from '../../Steps/Steps.index'
import Step from '../../Steps/Steps.item'

class PageSteps extends Component {

  state = {
    activeStepIndex: 0,
    lastStepIndex: 4
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
        activeStepIndex: prevState.activeStepIndex - 1
      }
    })
  }

  render() {
    const {activeStepIndex, lastStepIndex} = this.state
    return (
      <Container>
        <ContentSection className={`steps-page`}>
          <header className="content-section__header">
            <h1 className="content-section__title">
              PageSteps
            </h1>
          </header>
          <Steps activeStepIndex={activeStepIndex} lastStepIndex={lastStepIndex} nextStep={this.nextStep}>
            <Step title={`Personal details`}>
              STEP CONTENT 1
              <button className="button button-main"
                type="button"
                onClick={this.prevStep}
                disabled
              >
                Prev
              </button>
              <button className="button button-main" onClick={this.nextStep}>Next</button>
            </Step>
            <Step title={`Bank details`}>
              STEP CONTENT 2
              <button className="button button-main" onClick={this.prevStep}>Prev</button>
              <button className="button button-main" onClick={this.nextStep}>Next</button>
            </Step>
            <Step title={`Purchase page`}>
              STEP CONTENT 3
              <button className="button button-main" onClick={this.prevStep}>Prev</button>
              <button className="button button-main" onClick={this.nextStep}>Next</button>
            </Step>
            <Step title={`Sign In`}>
              STEP CONTENT 4
              <button className="button button-main" onClick={this.prevStep}>Prev</button>
              <button className="button button-main" onClick={this.nextStep}>Next</button>
            </Step>
            <Step title={`Review & Send`}>
              STEP CONTENT 5
              <button className="button button-main" onClick={this.prevStep}>Prev</button>
              <button className="button button-main" disabled onClick={this.nextStep}>NEXT</button>
            </Step>
          </Steps>
        </ContentSection>
      </Container>
    )
  }

}

export default PageSteps