import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../grid/Container/Container.index'
import ContentSection from '../../ContentSection/ContentSection.index'
import Header from './Project.header'
import Documents from './Project.documents'
import Summery from './Project.summery'
import AboutCompany from './Project.aboutCompany'
import OurTeam from './Project.team'
import './Project.style.styl'
import {history} from '../../../history'

ProjectPage.propTypes = {
  // from App.routes
  projectId: PropTypes.string,
  projectName: PropTypes.string,
}

function ProjectPage(props) {

  const onPurchaseButtonClick = event => {
    event && event.preventDefault && event.preventDefault()
    const {projectId, projectName} = props
    history.push(`/home/${projectName}/${projectId}/steps`)
  }

  return (
    <Container>
      <ContentSection className={`project-page`}>
        <Header purchaseButtonClick={onPurchaseButtonClick} />
        <Documents />
        <Summery />
        <AboutCompany />
        <OurTeam />
        <div className="project-page__buttons-wrapper">
          <button
            type="button"
            className="project-page__button-footer button button-main"
            onClick={onPurchaseButtonClick}
          >
            Purchase
          </button>
        </div>
      </ContentSection>
    </Container>

  )

}

export default ProjectPage