import React from 'react'

import BaseLayout from '../../grid/BaseLayout/BaseLayout.index'
import WhoAreWe from './WhoAreWe/WhoAreWe.index'
import OurTeam from './OurTeam/OurTeam.index'

function About() {

  return (
    <BaseLayout>
      <WhoAreWe />
      <OurTeam />
    </BaseLayout>
  )

}

export default About