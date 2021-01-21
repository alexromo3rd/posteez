import React, { Component } from 'react';
import Header from './components/Header';
import NewPostIt from './components/NewPostIt';
import PostItList from './components/PostItList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getPostIts();
  }

  getPostIts = () => {
    axios.get('/api/post-its').then(res => {
      this.setState({ data: res.data });
    });
  }

  addPostIt = (input) => {
    axios.put('/api/post-its', input).then(res => {
      this.setState({ data: res.data });
    });
  }

  filterPostIts = (input) => {
    const filteredPostIts = this.state.data.filter(element => element.title.toLowerCase().includes(input));
    this.setState({ data: filteredPostIts });
  };

  clear = () => {
    this.getPostIts();
  }

  render() {
    return (
      <div className="app">
        <Header addPostItFn={this.addPostIt} filterPostItsFn={this.filterPostIts} clearFn={this.clear} />
        <NewPostIt addPostItFn={this.addPostIt} />
        <PostItList data={this.state.data} />
      </div>
    );
  };
}

export default App;