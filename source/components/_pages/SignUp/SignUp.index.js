import React, {Component} from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'
import {Link} from 'react-router-dom'
import './SignUp.style.styl'

import ContentSection from '../../ContentSection/ContentSection.index'
import Container from '../../grid/Container/Container.index'
import RadioButton from './SignUp.radio'

class SignUp extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string,
  }

  state = {
    selectedValue: `investor`
  }

  onUpdateSelectedValue = evt => {
    const {value} = evt.target
    this.setState({
      selectedValue: value
    })
  }

  render() {
    const {dir} = this.props
    const {selectedValue} = this.state
    return (
      <Container>
        <ContentSection className={`sign-up`}>
          <header className="content-section__header" dir={dir}>
            <h1 className="content-section__title">
              Sign up
            </h1>
            <div className="content-section__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </header>
          <div className="sign-up__switch">
            <RadioButton name="user"
              value="investor"
              selectedValue={selectedValue}
              updateValue={this.onUpdateSelectedValue}
              label="Investor"
            />
            <RadioButton name="user"
              value="entrepreneur"
              selectedValue={selectedValue}
              updateValue={this.onUpdateSelectedValue}
              label="Entrepreneur"
            />
          </div>
          <div className="sign-up__login">
            <div className="sign-up__login-text">
              Already have account?
            </div>
            <Link to="/log-in" className="sign-up__link">Log in</Link>
          </div>
        </ContentSection>
      </Container>
    )
  }

}

export default multiLang(SignUp)