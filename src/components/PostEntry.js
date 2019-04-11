import React from 'react'

const PostEntry = (props) => { 

  const { 
    title, 
    category, 
    shortDescription, 
    description, 
    publishedAt, 
    image, 
    comments 
  } = props.post

  return (
    <div className="post-content">
      <h3>{title}</h3>
      <div className="count">
        {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        {/* <icon-comments className="icon-comments"></icon-comments>  */}
      </div>
      <div className="description">{shortDescription}</div>
      <div className="postinfo"> {category}</div>
    </div>
  )
}

export default PostEntry