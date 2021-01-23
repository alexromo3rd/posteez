import React, { Component } from 'react';
import Button from './Button';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  filter = () => {
    const { value } = this.state;
    this.props.filterPostItsFn(value.toLowerCase());
    this.setState({ value: '' });
  };

  render() {
    return (
      <>
        <input className="search" placeholder="Filter by title..." type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <Button handleClick={this.filter} label={<i className="fas fa-filter"></i>} type="primary" />
        <Button handleClick={this.props.clearFn} label={<i className="fas fa-undo"></i>} type="secondary" />
      </>
    );
  };
}

export default SearchBar;
