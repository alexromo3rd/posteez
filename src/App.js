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
      this.setState({ data: res.data })
    });
  }

  render() {
    return (
      <div id="app">
        <Header />
        <PostItList data={this.state.data} />
        <Footer />
      </div>
    );
  };
}

export default App;