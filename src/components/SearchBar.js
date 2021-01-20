import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  filter = () => {
    const { value } = this.state;
    this.props.filteredPostItsFn(value);
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <button onClick={this.filter}>Search</button>
      </>
    );
  };
}

export default SearchBar;
