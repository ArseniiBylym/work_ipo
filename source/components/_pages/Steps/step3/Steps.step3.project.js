import React from 'react'
import PropTypes from 'prop-types'
import './Steps.step3.project.style.styl'
import ProgressBar from '../../../ProgressBarCircle/ProgressBarCircle.index'

Project.propTypes = {
  // from Steps.step3
  dir: PropTypes.string
}

function Project(props) {

  const {dir} = props
  return (
    <section className="steps-page__project">
      <h1 className="steps-page__project-title" dir={dir}>
        Project title
      </h1>
      <div className="steps-page__project-inner-wrapper">
        <div className="steps-page__project-left" dir={dir}>
          <div className="steps-page__project-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis ducimus eum excepturi natus non
              officia, quo ratione repellat repellendus similique tempora temporibus, voluptatibus. Alias dolorem
              doloribus labore officiis repudiandae temporibus tenetur voluptate. Blanditiis dolor eum exercitationem
              expedita impedit iusto, laudantium neque nostrum odit pariatur porro, provident saepe, sint veniam.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis ducimus eum excepturi natus non
              officia, quo ratione repellat repellendus similique tempora temporibus, voluptatibus. Alias dolorem
              doloribus labore officiis repudiandae temporibus tenetur voluptate. Blanditiis dolor eum exercitationem
              expedita impedit iusto, laudantium neque nostrum odit pariatur porro, provident saepe, sint veniam.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis ducimus eum excepturi natus non
              officia, quo ratione repellat repellendus similique tempora temporibus, voluptatibus. Alias dolorem
              doloribus labore officiis repudiandae temporibus tenetur voluptate. Blanditiis dolor eum exercitationem
              expedita impedit iusto, laudantium neque nostrum odit pariatur porro, provident saepe, sint veniam.
            </p>
          </div>
        </div>
        <div className="steps-page__project-right">
          <div className="steps-page__project-pledged" dir={dir}>
            282,120 ILS Pledged
          </div>
          <div className="steps-page__project-progress">
            <ProgressBar dynamicValue={5000} staticValue={15000} />
          </div>
          <div className="steps-page__project-finish-time" dir={dir}>
            16 days to ago
          </div>
        </div>
      </div>

    </section>
  )

}

export default Project