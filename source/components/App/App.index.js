import React, {Fragment} from 'react'
import {hot} from 'react-hot-loader'

import BaseLayout from '../grid/BaseLayout/BaseLayout.index'
import PageHeader from '../PageHeader/PageHeader.index'
import PageFooter from '../PageFooter/PageFooter.index'
import routes from '../_routes/App.routes'
import LangProvider from '../Lang/Lang.index'

function App() {

  return (
    <Fragment>
      <LangProvider>
        <BaseLayout pageHeader={PageHeader}
          pageContent={routes}
          pageFooter={PageFooter}
        />
      </LangProvider>
    </Fragment>
  )

}

// eslint-disable-next-line
export default hot(module)(App)