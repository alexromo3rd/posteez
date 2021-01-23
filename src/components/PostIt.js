import React from 'react';
import Button from './Button';
import './PostIt.css';

const PostIt = (props) => {
  const { id, title, description, category, deletePostItFn, showModalFn } = props;
  return (
    <div className='post-it'>
      <div className='title-container'>
        <h3 className='title'>{title}</h3>
        <div>
          <Button handleClick={() => showModalFn()} label={<i className="fas fa-edit"></i>} type="no-margin" />
          <Button handleClick={() => deletePostItFn(id)} label={<i className="fas fa-trash"></i>} type="no-margin delete" />
        </div>
      </div>
      <p className='description'>{description}</p>
      <p className='category'><strong>Category:</strong> {category}</p>
    </div>
  );
}

export default PostIt;