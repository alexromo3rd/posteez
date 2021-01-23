import React, { Component } from 'react';
import Header from './components/Header';
import NewPostIt from './components/NewPostIt';
import PostItList from './components/PostItList';
import Modal from './components/Modal';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      show: false
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

  // filterPostIts = (input) => {
  //   const filteredPostIts = this.state.data.filter(element => element.title.toLowerCase().includes(input));
  //   this.setState({ data: filteredPostIts });
  // };

  filterPostIts = (input) => {
    axios.get(`/api/post-its?title=${input}`)
  };

  addPostIt = (input) => {
    axios.put('/api/post-its', input).then(res => {
      this.setState({ data: res.data });
    });
  }

  updatePostIt = (id, body) => {
    // axios.post(`/api/post-its/${id}`, body).then(res => {
    //   this.setState({ data: res.data });
    // });
  }

  deletePostIt = (id) => {
    axios.delete(`/api/post-its/${id}`).then(res => {
      this.setState({ data: res.data });
    });
  }


  clear = () => {
    this.getPostIts();
  }

  showModal = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="app">
        <Header addPostItFn={this.addPostIt} filterPostItsFn={this.filterPostIts} clearFn={this.clear} />
        
        {this.state.show ? (
          <Modal showModalFn={this.showModal} />
          ) : (
          <>
            <NewPostIt addPostItFn={this.addPostIt} />
            {this.state.data.length > 0 ?
              <PostItList data={this.state.data} deletePostItFn={this.deletePostIt} />
            :
              <h2 className='empty-message'>Hmm...looks empty. Try creating a new Post-it above!</h2>
            }
          </>
        )}        
      </div>
    );
  };
}

export default App;