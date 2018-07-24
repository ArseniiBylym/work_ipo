import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../Lang/Lang.hoc'
import './ApprovedProjects.style.styl'

import Carousel from 'nuka-carousel'
import Container from '../../grid/Container/Container.index'
import ContentSection from '../../ContentSection/ContentSection.index'
import ProjectCard from './ApprovedProjects.projectCard'

// mock data
const mockData = [
  {
    id: 1,
    project_name: `Gothic1`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 2,
    project_name: `Gothic2`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 3,
    project_name: `Gothic3`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 4,
    project_name: `Gothic4`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 5,
    project_name: `Gothic5`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 6,
    project_name: `Gothic6`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  }
]

ApprovedProjects.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function ApprovedProjects(props) {

  const renderSlides = mockData.map(slide => {
    return (
      <ProjectCard key={slide.id}
        id={slide.id}
        name={slide.project_name}
        description={slide.project_description}
        price={slide.project_price_nis}
        funds={slide.raised_funds_nis}
        url={slide.video_url}
        finishDate={slide.project_finish_date}
      />
    )
  })

  const {dir} = props
  return (
    <Container>
      <ContentSection className={`approved-projects`}>
        <header className="content-section__header" dir={dir}>
          <h1 className="content-section__title">
            Approved projects
          </h1>
          <div className="content-section__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </header>
        <div className="approved-projects__slider-wrapper">
          <Carousel slidesToShow={2}
            cellAlign="left"
            cellSpacing={90}
            heightMode={`first`}
            initialSlideHeight={480}
            dragging
            wrapAround
            autoplay
          >
            {renderSlides}
          </Carousel>
        </div>
      </ContentSection>
    </Container>
  )

}

export default multiLang(ApprovedProjects)