import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../../Lang/Lang.hoc'

PromoItem.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string,
  // from HowWorking.index
  title: PropTypes.string.isRequired,
  titleHover: PropTypes.string.isRequired,
  image: PropTypes.any,
  text: PropTypes.string.isRequired,
}

function PromoItem(props) {

  const {dir, title, titleHover, image, text} = props
  return (
    <div className="promo" dir={dir}>
      <div className="promo__image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="promo__attention">
        <h1 className="promo__title">
          {title}
        </h1>
      </div>
      <div className="promo__hover">
        <h2 className="promo__title-hover">
          {titleHover}
        </h2>
        <div className="promo__text">
          <p>
            {text}
          </p>
        </div>
      </div>
    </div>
  )

}

export default multiLang(PromoItem)