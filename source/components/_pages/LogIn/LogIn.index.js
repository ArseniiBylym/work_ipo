import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import lang from '../../_HOC/lang.hoc'

import Container from '../../grid/Container/Container.index'
import ContentSection from '../../ContentSection/ContentSection.index'
import Form from './LogIn.form'
import Modal from './LogIn.modal'


class LogIn extends Component {

  static propTypes = {
    // from lang.hoc
    dir: PropTypes.string
  }

  state = {
    isModalOpen: false
  }

  closeModal = () => this.setState({isModalOpen: false})
  openModal = () => this.setState({isModalOpen: true})

  render() {
    const {dir} = this.props
    const {isModalOpen} = this.state
    return (
      <Container>
        <ContentSection className={`log-in`}>
          {isModalOpen && <Modal close={this.closeModal} />}
          <header className="content-section__header" dir={dir}>
            <h1 className="content-section__title">
              Log in
            </h1>
            <div className="content-section__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </header>
          <div className="sign-up-container">
            <Form openModal={this.openModal} />
          </div>
          <div className="sign-up__login" dir={dir}>
            <div className="sign-up__login-text">
              Don't have account?
            </div>
            <Link to="/sign-up" className="sign-up__link">sign up</Link>
          </div>
        </ContentSection>
      </Container>
    )
  }

}

export default lang(LogIn)