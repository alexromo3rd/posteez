import React, { Component } from 'react';
import Button from './Button';
import './NewPostIt.css';

class NewPostIt extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      category: '',
      color: ''
    }
  }

  handleChange = (e) => {
    if(e.target.name === 'category') {
      this.setState({ [e.target.name]: e.target.value }, this.setColor());
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  setColor = () => {
    const colors = ["#b284be", "#818181", "#7afcff", "#c75e3a", "#ff7eb9", "#FFFF88"];
    const randomNum = Math.floor(Math.random() * 6);
    this.setState({ color: colors[randomNum] })
  }

  onSubmit = () => {
    const { title, description, category, color } = this.state;
    if (title && description && category && color) {
      this.props.addPostItFn(this.state);
      this.setState({
        title: '',
        description: '',
        category: '',
        color: ''
      });
    }
  }

  // onClick = () => {
  //   this.setColor();
  //   this.submit();
  // }

  render() {
    const { title, description, category } = this.state;
    return (
      <form className="new-post-it">
        <h3>Create Post-It:</h3>
        <input className="input" name="title" type="text" placeholder="title" value={title} onChange={e => this.handleChange(e)} required />
        <input className="input" name="description" type="text" placeholder="description" value={description} onChange={e => this.handleChange(e)} required />
        <input className="input" name="category" type="text" placeholder="category" value={category} onChange={e => this.handleChange(e)} required />

        <Button handleClick={this.onSubmit} label="Add" />
      </form>
    );
  };
}

export default NewPostIt;
