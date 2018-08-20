import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { history } from '../../../history'
import { showOverlay, hideOverlay } from '../../../redux/reducers/overlay.reducer'

import BaseLayout from '../../grid/BaseLayout/BaseLayout.index'
import Container from '../../grid/Container/Container.index'
import MediaPlayer from './MediaPlayer/MediaPlayer.index'
import './Tutorial.style.styl'
import Modal from './Modal/Tutorial.modal.index'

class Tutorial extends Component {

  static propTypes = {
    // from connect
    showOverlay: PropTypes.func,
    hideOverlay: PropTypes.func
  }

  componentDidMount() {
    const {showOverlay} = this.props
    showOverlay()
  }

  onLinkClick = evt => {
    evt && evt.preventDefault && evt.preventDefault()
    const {hideOverlay} = this.props
    hideOverlay()
    history.push(`/tutorial/description`)
  }

  render() {
    return (
      <BaseLayout>
        <Container>
          <Modal>
            <div className="tutorial__player">
              <MediaPlayer src={`https://www.youtube.com/watch?v=mDUDxlPs8gk`} />
            </div>
            <div className="tutorial__button-box">
              <a href="#"
                onClick={this.onLinkClick}
                className="tutorial__button button button--small button-bordered"
              >
                Know more
              </a>
            </div>
          </Modal>
        </Container>
      </BaseLayout>
    )
  }

}

const mapStateToProps = null
const mapDispatchToProps = {showOverlay, hideOverlay}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tutorial)
)