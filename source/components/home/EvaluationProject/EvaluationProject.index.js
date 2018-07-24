import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../Lang/Lang.hoc'
import './EvaluationProject.style.styl'

import Carousel from 'nuka-carousel'
import Container from '../../grid/Container/Container.index'
import ContentSection from '../../ContentSection/ContentSection.index'
import ProjectCard from './EvaluationProject.projectCard'

// mock data
const mockData = [
  {
    id: 1,
    project_name: `Gothic1`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 2,
    project_name: `Gothic2`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 3,
    project_name: `Gothic3`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 4,
    project_name: `Gothic4`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 5,
    project_name: `Gothic5`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 6,
    project_name: `Gothic6`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 7,
    project_name: `Gothic7`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 8,
    project_name: `Gothic8`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 9,
    project_name: `Gothic9`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 10,
    project_name: `Gothic10`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 11,
    project_name: `Gothic11`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 12,
    project_name: `Gothic12`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 13,
    project_name: `Gothic13`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 14,
    project_name: `Gothic14`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 15,
    project_name: `Gothic15`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 16,
    project_name: `Gothic16`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 17,
    project_name: `Gothic17`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 18,
    project_name: `Gothic18`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 19,
    project_name: `Gothic19`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  },
  {
    id: 20,
    project_name: `Gothic20`,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  }
]

EvaluationProject.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function EvaluationProject(props) {

  const slide1 = mockData.slice(0, 5)
  const slide2 = mockData.slice(5, 10)
  const slide3 = mockData.slice(10, 15)
  const slide4 = mockData.slice(15, 20)

  const renderSlides = slides => slides.map(slide => {
    return (
      <ProjectCard key={slide.id}
        id={slide.id}
        name={slide.project_name}
        url={slide.video_url}
      />
    )
  })

  const {dir} = props
  return (
    <Container>
      <ContentSection className={`evaluation-projects`}>
        <header className="content-section__header" dir={dir}>
          <h1 className="content-section__title">
            Projects in evaluation
          </h1>
          <div className="content-section__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </header>
        <div className="evaluation-projects__slider-wrapper">
          <Carousel slidesToShow={1}
            cellAlign="left"
            cellSpacing={0}
            heightMode={`first`}
            initialSlideHeight={600}
            dragging
            wrapAround
            autoplay
          >
            <div className="evaluation-projects__slider-slide">
              {renderSlides(slide1)}
            </div>
            <div className="evaluation-projects__slider-slide">
              {renderSlides(slide2)}
            </div>
            <div className="evaluation-projects__slider-slide">
              {renderSlides(slide3)}
            </div>
            <div className="evaluation-projects__slider-slide">
              {renderSlides(slide4)}
            </div>
          </Carousel>
        </div>
      </ContentSection>
    </Container>
  )

}

export default multiLang(EvaluationProject)