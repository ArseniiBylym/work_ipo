import React from 'react'
import {Consumer as LangConsumer} from './Lang.index'

function LangSwitch() {

  const renderLangSwitch = context => {
    const {changeLang} = context
    return (
      <div className="lang-switch">
        <div className="lang-switch__text">
          Language:
          <a href="#"
            className="lang-switch__link"
            onClick={() => changeLang(`he`, `rtl`)}
          >
            he
          </a>
          <a href="#"
            className="lang-switch__link lang-switch__link--active"
            onClick={() => changeLang(`en`, `ltr`)}
          >
            en
          </a>
        </div>

      </div>
    )
  }

  return (
    <LangConsumer>
      {context => renderLangSwitch(context)}
    </LangConsumer>
  )

}

export default LangSwitch
