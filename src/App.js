import React, { Component } from 'react';
import Header from './components/Header';
import PostItList from './components/PostItList';
import Footer from './components/Footer';
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
    console.log('clicked!');
  }

  filterPostIts = (input) => {
    const filteredPostIts = this.state.data.filter(element => element.title.includes(input));
    this.setState({ data: filteredPostIts });
  };

  clear = () => {
    this.getPostIts();
  }

  render() {
    return (
      <div className="app">
        <Header addPostItFn={this.addPostIt} filterPostItsFn={this.filterPostIts} clearFn={this.clear} />
        <PostItList data={this.state.data} />
        <Footer />
      </div>
    );
  };
}

export default App;