import React, { Component } from 'react';

class Checkbox extends Component {

  constructor() {
    super();
    this.state = {
      checked: false,
    }
  }

  componentDidMount = () => {
    this.setState( prev => ({
      checked: this.props.checked,
    }))
  }

  checkHandle = () => {
    this.setState( prev => {
      return {
        checked: !prev.checked
      }
    })
  }

  render() {
    const { label } = this.props;
    const isCheckedClass = this.state.checked ? 'settings__checkbox-checked' : '';

    return (
      <div className="settings__checkbox-wrap">
        <label className="settings__checkbox-label">
          <input
            className={`settings__checkbox ${isCheckedClass}`}
            type="checkbox"
            name={name}
            onClick={this.checkHandle}
          />
          {label}
        </label>
      </div>
    );
  }

}

export default Checkbox;
