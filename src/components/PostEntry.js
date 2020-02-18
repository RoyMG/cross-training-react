import React from 'react';
import { Icon } from '@material-ui/core';
import PostActions from './PostActions';
import styled from 'styled-components';

const PostEntry = ({ post, deletePost, editPost }) => {
  const PostContent = styled.div`
    padding: 25px;
  `;
  const Titler = styled.h3`
    font-size: 2em;
  `;
  const ActionBar = styled.div`
    padding: 0 30px 20px 0;
    text-align: right;
  `;
  const CommentBar = styled.div`
    margin-bottom: 10px;
  `;

  const { title, category, shortDescription, image, comments, id } = post;
  return (
    <div key={id} className="post">
      <div style={{ textDecoration: 'none', color: 'white' }}>
        <div
          className="post-background"
          style={{ backgroundImage: `url(${image})` }}
        >
          <PostContent className="post-content">
            <Titler>{title}</Titler>
            <CommentBar className="count">
              {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
              <Icon className="comment-icon">question_answer</Icon>
            </CommentBar>
            <div className="description">{shortDescription}</div>
            <div className="postinfo"> {category}</div>
          </PostContent>
          <ActionBar className="post-actions">
            <PostActions id={id} deletePost={deletePost} editPost={editPost} />
          </ActionBar>
        </div>
      </div>
    </div>
  );
};

export default PostEntry;
