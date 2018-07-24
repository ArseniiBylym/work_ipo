import React, {Fragment} from 'react'
import ApprovedProjects from '../../home/ApprovedProjects/ApprovedProjects.index'
import EvaluationProject from '../../home/EvaluationProject/EvaluationProject.index'

function Home() {

  return (
    <Fragment>
      <ApprovedProjects />
      <EvaluationProject />
    </Fragment>
  )

}

export default Home