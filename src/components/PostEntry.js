import React from 'react';
import { Icon } from '@material-ui/core';
import PostActions from './PostActions';

const PostEntry = ({ post, deletePost }) => {
  const { title, category, shortDescription, image, comments, id } = post;
  return (
    <div key={id} className="post">
      <div style={{ textDecoration: 'none', color: 'white' }}>
        <div
          className="post-background"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="post-content">
            <h3>{title}</h3>
            <div className="count">
              {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
              <Icon className="comment-icon">question_answer</Icon>
            </div>
            <div className="description">{shortDescription}</div>
            <div className="postinfo"> {category}</div>
          </div>
          <div className="post-actions">
            <PostActions id={id} deletePost={deletePost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEntry;
