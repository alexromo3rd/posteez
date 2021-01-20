import React, { Component } from 'react';
import './NewPostIt.css';

class NewPostIt extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      category: ''
    }
  }

  handleChange = () => {

  }

  render() {
    return (
      <button className='new-post-it uni' onClick={() => this.props.addPostItFn()}>New Post-it</button>
    );
  };
}

export default NewPostIt;
