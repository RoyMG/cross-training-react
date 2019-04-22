import React from 'react'
import PostActions from './PostActions';
import { Link } from 'react-router-dom'
const PostEntry = ({ post }) => { 

  const { 
    title, 
    category, 
    shortDescription, 
    description, 
    publishedAt, 
    image, 
    comments,
    id
  } = post

  return (
    <div className="post" key={id}>
      <Link to={`/post/${id}`}>
        <div className="post-background">
          <div className="post-content">
            <h3>{title}</h3>
            <div className="count">
              {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
              {/* <icon-comments className="icon-comments"></icon-comments>  */}
            </div>
            <div className="description">{shortDescription}</div>
            <div className="postinfo"> {category}</div>
          </div>
        </div>
      </Link>
      <PostActions id={post.id}/>
    </div>
  )
}

export default PostEntry