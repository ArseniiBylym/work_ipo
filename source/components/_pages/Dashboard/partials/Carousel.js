import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import uuid from 'uuid/v4';

class CarouselCustom extends Component {

  render() {
    const { items, item: Item, itemsWrapper: ItemsWrapper, rows } = this.props;
    let itemsToRender = [];
    let currentItem = 0;

    if(rows === 1) {
      itemsToRender = items;
    } else {
      for(let i = 0; i < items.length;) {
        const itemsPack = (
          <ItemsWrapper key={uuid()}>
            { fillWrapper() }
          </ItemsWrapper>
        )

        itemsToRender.push(itemsPack);

        currentItem += rows;
        i += rows;

        function fillWrapper() {
          return items.slice(currentItem, currentItem + rows);
        }
      }
    }
// debugger
    return (
      <Carousel
        slidesToShow={1}
        renderControls={true}
        // slideWidth='400px'
        // cellSpacing={20}
        // framePadding='0 50px'
        initialSlideWidth={740}
        // heightMode='current'
        initialSlideHeight={450}
        cellSpacing={66}
        wrapAround
        dragging={false}
        renderTopLeftControls={({ previousSlide }) => (
          <span
            onClick={previousSlide}
            className="project__team-control project__team-control-prev"
          />
        )}
        renderTopRightControls={({ nextSlide }) => (
          <span
            onClick={nextSlide}
            className="project__team-control project__team-control-next"
          />
        )}
      >
        {itemsToRender}
      </Carousel>
    );
  }

}

export default CarouselCustom;
