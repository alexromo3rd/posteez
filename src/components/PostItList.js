import React from 'react';
import PostIt from './PostIt';
import './PostItList.css';

const PostItList = (props) => {
  const postIts = props.data.map(postIt => {
    return(
      <PostIt key={postIt.id} title={postIt.title} description={postIt.description} category={postIt.category} />
    )
  });

  return (
    <div className="post-it-list">
      {postIts}
    </div>
  );
};

export default PostItList;