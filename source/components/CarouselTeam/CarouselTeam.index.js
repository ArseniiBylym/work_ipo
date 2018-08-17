import React from 'react'
import PropTypes from 'prop-types'
import './CarouselTeam.style.styl'

import Carousel from 'nuka-carousel'
import Item from './CarouselTeam.item'
import './CarouselTeam.style.styl'

CarouselTeam.propTypes = {
  // from parent component
  team: PropTypes.array.isRequired
}

function CarouselTeam(props) {

  const renderSlides = () => {
    const {team} = props
    return team.map(item => {
      return (
        <Item key={item.name}
          photo={item.photo}
          fullName={item.name}
          post={item.post}
        />
      )
    })
  }

  return (
    <div className="team-carousel">
      <Carousel slidesToShow={3}
        cellAlign="left"
        cellSpacing={20}
        heightMode={`first`}
        initialSlideHeight={360}
        initialSlideWidth={280}
        wrapAround
      >
        {renderSlides()}
      </Carousel>
    </div>
  )

}

export default CarouselTeam