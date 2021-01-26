import React, { Component } from 'react';
import Header from './components/Header';
import NewPostIt from './components/NewPostIt';
import PostItList from './components/PostItList';
import EditPostItModal from './components/EditPostItModal';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      editId: '',
      editTitle: '',
      editDescription: '',
      editCategory: '',
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

  filterPostIts = (input) => {
    const filteredPostIts = this.state.data.filter(element => element.title.toLowerCase().includes(input));
    if (filteredPostIts.length > 0) {
      this.setState({ data: filteredPostIts });
    } else {
      this.setState({ data: [] });
    }
  };

  addPostIt = (input) => {
    axios.put('/api/post-its', input).then(res => {
      this.setState({ data: res.data });
    });
  }

  updatePostIt = (body) => {
    axios.post(`/api/post-its/${this.state.editId}`, body).then(res => {
      this.setState({ data: res.data });
    });
    this.setState({
      editId: '',
      editTitle: '',
      editDescription: '',
      editCategory: ''
    });
    this.hideModal();
  }

  deletePostIt = (id) => {
    axios.delete(`/api/post-its/${id}`).then(res => {
      this.setState({ data: res.data });
    });
  }

  clear = () => {
    this.getPostIts();
  }

  showModal = (id, title, description, category) => {
    this.setState({
      show: true, 
      editId: id,
      editTitle: title,
      editDescription: description,
      editCategory: category
    });
  }

  hideModal = () => {
    this.setState({
      show: false,
      editId: '',
      editTitle: '',
      editDescription: '',
      editCategory: ''
    });
  }

  render() {
    const { addPostIt, filterPostIts, clear, deletePostIt, showModal, updatePostIt, hideModal } = this;
    const { data, show, editTitle, editDescription, editCategory } = this.state;

    return (
      <div className="app">
        <Header addPostItFn={addPostIt} filterPostItsFn={filterPostIts} clearFn={clear} />
        <NewPostIt addPostItFn={addPostIt} />
        {data.length > 0 ? 
          <PostItList data={data} deletePostItFn={deletePostIt} showModalFn={showModal} />
          :
          <h2 className='empty-message'>Hmmm...looks empty.</h2>
        }
        {show &&
          <EditPostItModal updatePostItFn={updatePostIt} hideModalFn={hideModal} title={editTitle} description={editDescription} category={editCategory} />
        }
      </div>
    );
  };
}

export default App;