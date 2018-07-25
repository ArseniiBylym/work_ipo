import React from 'react'
import './SocialLinks.style.styl'

import Container from '../grid/Container/Container.index'
import ContentSection from '../ContentSection/ContentSection.index'
import Link from './SocialLinks.link'

// mock
import icon1 from './images/envelope.svg'
import icon2 from './images/placeholder.svg'
import icon3 from './images/facebook.svg'
import icon4 from './images/linkedin.svg'
const mockData = [
  {
    icon: icon1,
    text: `email@email.com`,
    url: `http://...`
  },
  {
    icon: icon2,
    text: `9265 Valley View Drive Gettysburg, PA 17325`,
    url: `http://...`
  },
  {
    icon: icon3,
    text: `facebook`,
    url: `https://www.facebook.com/`
  },
  {
    icon: icon4,
    text: `linkedin`,
    url: `https://www.linkedin.com`
  }
]

function SocialLinks() {

  const renderLinks = mockData.map(link => {
    return (
      <li className="social-links__item" key={link.text}>
        <Link name={link.text}
          url={link.url}
          icon={link.icon}
        />
      </li>
    )
  })

  return (
    <Container>
      <ContentSection className={`social-links`}>
        <ul className="social-links__list">
          {renderLinks}
        </ul>
      </ContentSection>
    </Container>
  )

}

export default SocialLinks