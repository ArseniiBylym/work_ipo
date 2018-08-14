import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <div className="dash-header__search">
        <input
          className="form-control__field"
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }

}

export default Search;
