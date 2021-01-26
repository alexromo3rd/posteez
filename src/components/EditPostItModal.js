import React, { Component } from 'react';
import Button from './Button';
import './EditPostItModal.css';

class EditPostItModal extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      category: ''
    }
  }

  componentDidMount() {
    const { title, description, category } = this.props;
    this.setState({
      title,
      description,
      category
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = () => {
    this.props.updatePostItFn(this.state);
    this.setState({
      title: '',
      description: '',
      category: ''
    })
  }

  render() {
    const { hideModalFn } = this.props;
    const { title, description, category } = this.state
    const { handleChange, onSubmit } = this;

    return (
      <div className='modal'>
        <section className="modal-main">
          <h2 className='modal-title'>Edit</h2>
          <div className='modal-inputs'>
            <textarea name='title' type="text" value={title} onChange={e => handleChange(e)} />
            <textarea name='description' type="text" value={description} className='desc-textarea' onChange={e => handleChange(e)} />
            <textarea name='category' type="text" value={category} onChange={e => handleChange(e)} />
          </div>
          <div className='modal-buttons'>
            <Button handleClick={() => hideModalFn()} label='Cancel' styleName='secondary' />
            <Button handleClick={onSubmit} label='Update' styleName="primary" />
          </div>
        </section>
      </div>
    );
  }
}

export default EditPostItModal;
