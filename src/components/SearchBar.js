// import React from 'react';

// const SearchBar = (props) => {
//   return (
//     <div>
//       <button onClick={props.filteredPostItsFn}>Click me</button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  handleChange = e => {

  }

  render() {
    return (
      <div>
        <button onClick={this.props.filteredPostItsFn}>Click me</button>
      </div>
    );
  };
}

export default SearchBar;
