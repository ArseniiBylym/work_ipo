import React from 'react'
import PropTypes from 'prop-types'
import lang from '../../_HOC/lang.hoc'

import HowWorking from './HowWorking/HowWorking.index'
import SocialLinks from '../../SocialLinks/SocialLinks.index'

EntrepreneurSeekingFunding.propTypes = {
  // from lang.hoc
  dir: PropTypes.string
}

function EntrepreneurSeekingFunding(props) {

  const {dir} = props
  return (
    <div dir={dir}>
      <HowWorking />
      <SocialLinks />
    </div>
  )

}

export default lang(EntrepreneurSeekingFunding)