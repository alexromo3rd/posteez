import React from 'react';
import './PostIt.css';

const PostIt = (props) => {
  const { title, description, category } = props;
  return (
    <div className='post-it'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
};

export default PostIt;
