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
  // console.log(image)
  return (
    <div key={id} className='post'>
      <Link to={`/post/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <div className="post-background" style={{ backgroundImage: `url(${image})`}}>
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
      <div className='post-actions'>
        <PostActions id={post.id}/>
      </div> 
    </div>
  )
}

export default PostEntry