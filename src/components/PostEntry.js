import React from 'react'
import PostActions from './PostActions';

const PostEntry = ({ post }) => { 

  const { 
    title, 
    category, 
    shortDescription, 
    description, 
    publishedAt, 
    image, 
    comments 
  } = post

  return (
    <div className="post" key={post.id}>
      <a>
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
      </a>
      <PostActions id={post.id}/>
    </div>
  )
}

export default PostEntry