import React from 'react'
import PostEntry from './PostEntry';
import FilterBy from './FilterBy';
import '../styles/posts.css'

const PostList = ({ posts })  => {

  return (
    <div>
      <FilterBy/>
      <div className='posts-list'>
        {posts.map(post => (
          <div key={post.id} className='post-item'>
            <PostEntry post={post}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList