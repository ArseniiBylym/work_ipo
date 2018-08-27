import React, { Component } from 'react';

class ProfileButton extends Component {


  render() {
    const {
      addedClassName = '',
      text,
    } = this.props;

    return (
      <button
        className={`profile-button ${addedClassName}`}
      >
        {text}
      </button>
    );
  }

}

export default ProfileButton;
