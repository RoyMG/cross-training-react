import React from 'react'
import PostEntry from './PostEntry';
import FilterBy from './FilterBy';
import '../styles/posts.css'

const PostList = ({ posts , changeViewHandler })  => {

  return (
    <div className='list-container'>
      <FilterBy/>
      <div className='posts-list'>
        {posts.map(post => (
          <div key={post.id} className='post-item' >
            <PostEntry post={post} changeViewHandler={changeViewHandler}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList