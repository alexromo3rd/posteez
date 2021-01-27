import React from 'react';
import Button from './Button';
import './PostIt.css';

const PostIt = (props) => {
  const { id, title, description, category, color, deletePostItFn, showModalFn } = props;
  return (
    <div className='post-it' style={{ backgroundColor: `${color}`}}>
      <div className='title-container'>
        <h3 className='title'>{title}</h3>
        <div>
          <div class="tooltip">
            <span class="tooltiptext top">Edit</span>
            <Button handleClick={() => showModalFn(id, title, description, category)} label={<i className="fas fa-edit"></i>} styleName="post-it-button" />
          </div>
          <div class="tooltip">
            <span class="tooltiptext top">Delete</span>
            <Button handleClick={() => deletePostItFn(id)} label={<i className="fas fa-trash"></i>} styleName="post-it-button delete" />
          </div>
        </div>
      </div>
      <p className='description'>{description}</p>
      <p className='category'><strong>Category:</strong> {category}</p>
    </div>
  );
}

export default PostIt;