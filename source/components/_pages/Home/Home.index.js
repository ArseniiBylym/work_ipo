import React, {Fragment} from 'react'
import ApprovedProjects from './ApprovedProjects/ApprovedProjects.index'
import EvaluationProject from './EvaluationProject/EvaluationProject.index'

function Home() {

  return (
    <Fragment>
      <ApprovedProjects />
      <EvaluationProject />
    </Fragment>
  )

}

export default Home