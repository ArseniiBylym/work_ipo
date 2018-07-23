import React, {Component} from 'react'
import {Consumer as LangConsumer} from './Lang.index'

export default function (WrappedComponent) {
  return class MultiLang extends Component {

    render() {
      return (
        <LangConsumer>
          {
            context => {
              const {dir} = context
              return (
                <WrappedComponent dir={dir}
                  {...this.state}
                  {...this.props}
                />
              )
            }
          }
        </LangConsumer>
      )
    }

  }
}
