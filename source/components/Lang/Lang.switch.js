import React, {Component} from 'react'
import PropTypes from 'prop-types'
import multiLang from '../_HOC/lang.hoc'
import {LangConsumer} from './Lang.index'

import SwitchButton from './Lang.button'

class LangSwitch extends Component {

  static propTypes = {
    contentText: PropTypes.object,
    // from HOC Lang.hoc
    dir: PropTypes.string
  }

  state = {
    selectedLang: `he`,
  }

  componentDidMount() {
    const lang = window.localStorage.getItem(`lang`)
    if (!lang) return
    this.setState({
      selectedLang: lang
    })
  }

  handleLangChange = (evt, context, dir) => {
    const {value} = evt.target
    const {changeLang} = context
    this.setState({selectedLang: value})
    changeLang(value, dir)
    window.localStorage.setItem(`lang`, value)
    window.localStorage.setItem(`dir`, dir)
  }

  renderLangSwitch = context => {
    const {selectedLang} = this.state
    const {dir, contentText} = this.props

    if (!contentText) return null

    return (
      <div className="lang-switch">
        <div className="lang-switch__text page-footer-text text-separator">
          <span dir={dir}>{contentText[`footer.lang`]}</span>
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
