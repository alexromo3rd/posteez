import React, { Component } from 'react';
import Button from './Button';
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = () => {
    this.props.addPostItFn(this.state);
  }

  render() {
    const { title, description, category } = this.state;
    return (
      <div className="new-post-it">
        <input className="input" name="title" type="text" placeholder="title" value={title} onChange={e => this.handleChange(e)} />
        <input className="input" name="description" type="text" placeholder="description" value={description} onChange={e => this.handleChange(e)} />
        <input className="input" name="category" type="text" placeholder="category" value={category} onChange={e => this.handleChange(e)} />
        <Button handleClick={this.onSubmit} label="Create" />
      </div>
    );
  };
}

export default NewPostIt;
