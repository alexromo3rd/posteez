import React from 'react';
import './PostIt.css';

const PostIt = (props) => {
  const { title, description, category } = props;
  return (
    <div className='post-it'>
      <h3 className='title'>{title}</h3>
      <p className='description'>{description}</p>
      <p className='category'><strong>Category:</strong> {category}</p>
    </div>
  );
};

export default PostIt;
