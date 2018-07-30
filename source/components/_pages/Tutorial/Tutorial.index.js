import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {showOverlay} from '../../../redux/reducers/overlay.reducer'

import Modal from '../../Modal/Modal.index'

class Tutorial extends Component {

  static propTypes = {
    // from connect
    showOverlay: PropTypes.func
  }

  componentDidMount() {
    const {showOverlay} = this.props
    showOverlay()
  }

  render() {
    return (
      <div>
        <Modal />
      </div>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {showOverlay}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tutorial)
)