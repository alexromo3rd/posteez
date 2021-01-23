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
      backgroundColor: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = () => {
    console.log(this.state)

    const { title, description, category } = this.state;
    if (!title || !description || !category) {
      alert('Please fill in all fields.')
    } else {
      this.props.addPostItFn(this.state);
      this.setState({
        title: '',
        description: '',
        category: '',
        backgroundColor: ''
      });
    }
  }

  // randomColor = () => {
  //   const x = Math.floor(Math.random() * 256);
  //   const y = Math.floor(Math.random() * 256);
  //   const z = Math.floor(Math.random() * 256);
    
  //   this.setState({
  //     backgroundColor: "rgb(" + x + "," + y + "," + z + ")"
  //   })
  // }

  render() {
    const { title, description, category } = this.state;
    return (
      <div className="new-post-it">
        <h3>Create Post-It:</h3>
        <input className="input" name="title" type="text" placeholder="title" value={title} onChange={e => this.handleChange(e)} />
        <input className="input" name="description" type="text" placeholder="description" value={description} onChange={e => this.handleChange(e)} />
        <input className="input" name="category" type="text" placeholder="category" value={category} onChange={e => this.handleChange(e)} />
        <Button handleClick={() => {this.onSubmit()}} label="Add" />
      </div>
    );
  };
}

export default NewPostIt;
