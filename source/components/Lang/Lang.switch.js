import React, {Component} from 'react'
import PropTypes from 'prop-types'
import multiLang from './Lang.hoc'
import {LangConsumer} from './Lang.index'

import SwitchButton from './Lang.button'

class LangSwitch extends Component {

  static propTypes = {
    // from HOC Lang.hoc
    dir: PropTypes.string
  }

  state = {
    selectedLang: `he`
  }

  componentDidMount() {
    const lang = window.localStorage.getItem(`lang`)
    if (!lang) return
    this.setState({selectedLang: lang})
  }

  handleLangChange = (evt, context, dir) => {
    const {value} = evt.target
    const {changeLang} = context
    this.setState({selectedLang: value})
    changeLang(value, dir)
    window.localStorage.setItem(`lang`, value)
  }

  renderLangSwitch = context => {
    const {selectedLang} = this.state
    const {dir} = this.props
    return (
      <div className="lang-switch">
        <div className="lang-switch__text page-footer-text text-separator">
          <span dir={dir}>Language:</span>
          <SwitchButton context={context}
            selectedLang={selectedLang}
            lang="he"
            dir="rtl"
            handleLangChange={this.handleLangChange}
          />
          <SwitchButton context={context}
            selectedLang={selectedLang}
            lang="en"
            dir="ltr"
            handleLangChange={this.handleLangChange}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <LangConsumer>
        {context => this.renderLangSwitch(context)}
      </LangConsumer>
    )
  }

}

export default multiLang(LangSwitch)
