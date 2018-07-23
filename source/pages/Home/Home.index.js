import React, {Fragment} from 'react'

import BaseLayout from '../../components/Grid/BaseLayout/BaseLayout.index'
import PageHeader from '../../components/PageHeader/PageHeader.index'
import PageContent from './Home.pageContent'
import PageFooter from '../../components/PageFooter/PageFooter.index'

function Home() {

  return (
    <Fragment>
      <BaseLayout pageHeader={PageHeader}
        pageContent={PageContent}
        pageFooter={PageFooter}
      />
    </Fragment>
  )

}

export default Home