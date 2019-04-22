import React from 'react'
// import { getPosts } from '../helpers/getPosts';
import PostEntry from './PostEntry';
// import PostActions from './PostActions';
import FilterBy from './FilterBy';
// import FullPost from './FullPost';

const PostList = ({ posts })  => {

  return (
    <div>
      <FilterBy/>
      {posts.map(post => (
        <div key={post.id}>
          <PostEntry post={post}/>
        </div>
      ))}
    </div>
  )
}

export default PostList