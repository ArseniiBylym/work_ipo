import React from 'react'

import Container from '../../grid/Container/Container.index'
import ContentSection from '../../ContentSection/ContentSection.index'
import Header from './Project.header'
import Documents from './Project.documents'
import Summery from './Project.summery'
import AboutCompany from './Project.aboutCompany'
import OurTeam from './Project.team'
import './Project.style.styl'

function ProjectPage() {

  return (
    <Container>
      <ContentSection className={`project-page`}>
        <Header />
        <Documents />
        <Summery />
        <AboutCompany />
        <OurTeam />
        <div className="project-page__buttons-wrapper">
          <button type="button" className="project-page__button-footer button button-main">Purchase</button>
        </div>
      </ContentSection>
    </Container>

  )

}

export default ProjectPage