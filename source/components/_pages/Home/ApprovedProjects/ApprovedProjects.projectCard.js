import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import multiLang from '../../../_HOC/lang.hoc'

import ReactPlayer from 'react-player'
import ProgressBar from '../../../ProgressBarCircle/ProgressBarCircle.index'

ProjectCard.propTypes = {
  // from ApprovedProjects.index
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  funds: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  finishDate: PropTypes.string.isRequired,
  // from lang.hoc
  dir: PropTypes.string
}

function ProjectCard(props) {

  const formatDay  = () => {
    const {finishDate} = props
    const today = Date.now()
    const lastDay = Date.parse(finishDate)
    const daysToGo = lastDay - today
    return Math.floor(daysToGo / 1000 / 60 / 60 / 24)
  }

  const {id, name, url, funds, description, price, dir} = props
  return (
    <article className="approved-project-card">
      <Link to={`/home/${name}/${id}`} className="approved-project-card__player-wrapper">
        <div className="approved-project-card__player-mask" />
        <ReactPlayer url={url}
          width={430}
          height={230}
        />
      </Link>
      <div className="approved-project-card__info">
        <div className="approved-project-card__item" dir={dir}>
          <Link to={`/home/${name}/${id}`}
            className="approved-project-card__title"
            dir={dir}
          >
            {name}
          </Link>
          <div className="approved-project-card__field">Field</div>
          <div className="approved-project-card__funds">
            &#8362;{funds} pledged
          </div>
          <div className="approved-project-card__description">
            <p>
              {description}
            </p>
          </div>
        </div>
        <div className="approved-project-card__item approved-project-card__item--small">
          <div className="approved-project-card__progress-bar-wrapper">
            <ProgressBar dynamicValue={funds} staticValue={price} />
          </div>
          <div className="approved-project-card__finish-date" dir={dir}>
            {formatDay()} days to go
          </div>
        </div>
      </div>
    </article>
  )

}

export default multiLang(ProjectCard)