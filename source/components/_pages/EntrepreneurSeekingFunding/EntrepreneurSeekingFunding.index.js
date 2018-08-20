import React from 'react'
import PropTypes from 'prop-types'
import lang from '../../_HOC/lang.hoc'

import BaseLayout from '../../grid/BaseLayout/BaseLayout.index'
import HowWorking from './HowWorking/HowWorking.index'
import SocialLinks from '../../SocialLinks/SocialLinks.index'

EntrepreneurSeekingFunding.propTypes = {
  // from lang.hoc
  dir: PropTypes.string
}

function EntrepreneurSeekingFunding(props) {

  const {dir} = props
  return (
    <BaseLayout>
      <div dir={dir}>
        <HowWorking />
        <SocialLinks />
      </div>
    </BaseLayout>
  )

}

export default lang(EntrepreneurSeekingFunding)