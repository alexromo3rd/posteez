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

  filterPostIts = (input) => {
    console.log('Clicked!')
    const filteredPostIts = this.state.data.map(element => { element.title.includes(input) });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <Header filteredPostItsFn={this.filterPostIts} />
          <PostItList data={this.state.data} />
          <Footer />
        </div>
      </div>
    );
  };
}

export default App;