import React from 'react'
import PostActions from './PostActions';
import { Link } from 'react-router-dom'
import { Icon } from '@material-ui/core';

const PostEntry = ({ post, changeViewHandler, deletePost, editPost }) => { 
  const { 
    title, 
    category, 
    shortDescription, 
    image, 
    comments,
    id
  } = post
  return (
    <div key={id} className='post'>
      <Link 
      to={`/post/${id}`} 
      style={{ textDecoration: 'none', color: 'white' }} 
      onClick={()=> changeViewHandler('full')}
      >
        <div className="post-background" style={{ backgroundImage: `url(${image})`}}>
          <div className="post-content">
            <h3>{title}</h3>
            <div className="count">
              {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
              <Icon className="comment-icon">question_answer</Icon>
            </div>
            <div className="description">{shortDescription}</div>
            <div className="postinfo"> {category}</div>
          </div>
        </div>
      </Link>
      <div className='post-actions'>
        <PostActions id={id} deletePost={deletePost} editPost={editPost}/>
      </div> 
    </div>
  )
}

export default PostEntry