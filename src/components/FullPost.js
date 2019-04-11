import React from 'react'

const FullPost = ({post, handleBackClick}) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        {post.description}
      </p>
      <button onClick={() => handleBackClick()}>BACK</button>
    </div>
  )
}

export default FullPost