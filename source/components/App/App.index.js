import React, {Fragment} from 'react'

import BaseLayout from '../grid/BaseLayout/BaseLayout.index'
import PageHeader from '../PageHeader/PageHeader.index'
import PageFooter from '../PageFooter/PageFooter.index'
import routes from '../_routes/App.routes'

function App() {

  return (
    <Fragment>
      <BaseLayout pageHeader={PageHeader}
        pageContent={routes}
        pageFooter={PageFooter}
      />
    </Fragment>
  )

}

export default App