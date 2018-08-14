import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class LoaderCustom extends Component {

    render() {
      return (
        <Loader
         type="TailSpin"
         color="#000"
         height="40"
         width="40" />
    );
  }

}

export default LoaderCustom;
