import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getPageContent} from '../../../redux/reducers/home-page.reducer'
import lang from '../../_HOC/lang.hoc'

import ApprovedProjects from './ApprovedProjects/ApprovedProjects.index'
import EvaluationProject from './EvaluationProject/EvaluationProject.index'


class Home extends Component {

  static propTypes = {
    // from connect
    getPageContent: PropTypes.func,
    // from lang.hoc
    lang: PropTypes.string,
  }

  componentDidMount() {
    const {getPageContent, lang} = this.props

    getPageContent(lang, ``)
  }

  componentDidUpdate(prevProps) {
    const {getPageContent, lang} = this.props

    if (prevProps.lang !== lang) getPageContent(lang, ``)
  }

  render() {
    return (
      <div>
        <ApprovedProjects />
        <EvaluationProject />
      </div>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {getPageContent}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    lang(Home)
  )
)