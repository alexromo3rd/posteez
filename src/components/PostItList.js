import React from 'react';
import PostIt from './PostIt';
import './PostItList.css';

const PostItList = (props) => {
  const { data, deletePostItFn } = props;
  const postIts = data.map(postIt => {
    const { id, title, description, category } = postIt;
    return(
      <PostIt key={id} id={id} title={title} description={description} category={category} deletePostItFn={deletePostItFn} />
    )
  });

  return (
    <div className="post-it-list">
      {postIts}
    </div>
  );
};

export default PostItList;