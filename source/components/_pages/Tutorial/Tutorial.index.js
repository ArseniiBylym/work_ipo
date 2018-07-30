import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {showOverlay} from '../../../redux/reducers/overlay.reducer'
import Container from '../../grid/Container/Container.index'
import MediaPlayer from './MediaPlayer/MediaPlayer.index'
import './Tutorial.style.styl'

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
      <Container>
        <Modal>
          <div className="tutorial__player">
            <MediaPlayer src={`https://www.youtube.com/watch?v=mDUDxlPs8gk`} />
          </div>
          <div className="tutorial__button-box">
            <Link to={`/tutorial/description`}
              className="tutorial__button button button--small button-bordered"
            >
              Know more
            </Link>
          </div>
        </Modal>
      </Container>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {showOverlay}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tutorial)
)