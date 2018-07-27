import React, {Component, createContext} from 'react'
import PropTypes from 'prop-types'
import './Lang.style.styl'

const LangContext = createContext()
export const LangConsumer = LangContext.Consumer

class LangProvider extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node
    ])
  }

  state = {
    lang: `en`,
    dir: `ltr`
  }

  componentDidMount() {
    const lang = window.localStorage.getItem(`lang`)
    const dir = window.localStorage.getItem(`dir`)
    this.changeLang(lang, dir)
  }

  changeLang = (lang, dir) => this.setState({
    lang: lang,
    dir: dir
  })

  render() {
    const {lang, dir} = this.state
    const {children} = this.props
    const {Provider} = LangContext

    return (
      <Provider value={{
        lang: lang,
        dir: dir,
        changeLang: this.changeLang
      }}
      >
        {children}
      </Provider>
    )
  }

}

export default LangProvider
