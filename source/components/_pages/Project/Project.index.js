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
      </ContentSection>
    </Container>

  )

}

export default ProjectPage