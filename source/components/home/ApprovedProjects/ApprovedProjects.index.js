import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../Lang/Lang.hoc'
import './ApprovedProjects.style.styl'

import Slider from 'react-slick-16'
import Container from '../../grid/Container/Container.index'
import ContentSection from '../../ContentSection/ContentSection.index'
import ProjectCard from './ApprovedProjects.projectCard'

// mock data
const mockData = [
  {
    id: 1,
    project_name: `Gothic`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 2,
    project_name: `Gothic`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 3,
    project_name: `Gothic`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 4,
    project_name: `Gothic`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 5,
    project_name: `Gothic`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  },
  {
    id: 6,
    project_name: `Gothic`,
    project_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique justo eget mauris posuere vestibulum. Sed tincidunt, leo ac faucibus convallis, nisl urna mollis diam, quis dapibus massa nulla sed erat. Curabitur at ipsum metus. Vivamus id ante vitae ipsum viverra aliquam eget sit amet dui. Praesent efficitur hendrerit tempus.`,
    project_price_nis: 80000.56,
    raised_funds_nis: 100000.78,
    video_url: `https://www.youtube.com/watch?v=mDUDxlPs8gk`,
    project_finish_date: `2018-08-24 00:00:00`,
  }
]

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

ApprovedProjects.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function ApprovedProjects(props) {

  const sliderSettings = {
    arrows: false,
    dots: true,
    draggable: true,
    speed: 1000
  }

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
          <Slider {...sliderSettings}>
            {
              mockData.map(slide => {
                return (
                  <div key={slide.id} className="approved-projects__slider-inner">
                    <ProjectCard id={slide.id}
                      name={slide.project_name}
                      description={slide.project_description}
                      price={slide.project_price_nis}
                      funds={slide.raised_funds_nis}
                      url={slide.video_url}
                      finishDate={slide.project_finish_date}
                    />
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </ContentSection>
    </Container>
  )

}

export default multiLang(ApprovedProjects)