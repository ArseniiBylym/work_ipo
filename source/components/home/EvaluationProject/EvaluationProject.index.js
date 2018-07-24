import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../Lang/Lang.hoc'
import './EvaluationProject.style.styl'

import Slider from 'react-slick-16'
import Container from '../../grid/Container/Container.index'
import ContentSection from '../../ContentSection/ContentSection.index'
import ProjectCard from './EvaluationProject.projectCard'

// mock data
const mockData = {
  id: 6,
  project_name: `Gothic`,
  project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
  project_price_nis: 80000.56,
  raised_funds_nis: 100000.78,
  video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
  project_finish_date: `2018-08-22 00:00:00`
}

export const arrayToArrayArrays = (array, count) => {
  let result = []
  let tempCount = 0
  let repeat = array.length / count

  for (let i = 0; i < repeat; i++) {
    result.push([array[tempCount], array[tempCount + 1]])
    tempCount = tempCount + count
  }

  return result
}

EvaluationProject.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function EvaluationProject(props) {

  const sliderSettings = {
    arrows: false,
    dots: true,
    draggable: true,
    speed: 1000
  }

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
          <Slider {...sliderSettings}>
            <div className="evaluation-projects__slider-slide">
              <ProjectCard id={mockData.id}
                name={mockData.project_name}
                url={mockData.video_url}
              />
            </div>
            <div className="evaluation-projects__slider-slide">
              <ProjectCard id={mockData.id}
                name={mockData.project_name}
                url={mockData.video_url}
              />
            </div>
            <div className="evaluation-projects__slider-slide">
              <ProjectCard id={mockData.id}
                name={mockData.project_name}
                url={mockData.video_url}
              />
            </div>
          </Slider>
        </div>
      </ContentSection>
    </Container>
  )

}

export default multiLang(EvaluationProject)