import React, { Component } from 'react'
import PostEntry from './PostEntry';
import FilterBy from './FilterBy';
import '../styles/posts.css'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'All'
    }
  }

  handleFilter = (category) => {
    this.setState({
      filter: category
    })
  }

  render () {
    const { changeViewHandler, deletePost, editPost } = this.props
    let { posts } = this.props
    let { filter } = this.state
    
    posts = filter !== 'All' ? posts.filter(post => {
      filter = filter.toLowerCase()
      post = post.category.toLowerCase()
      if (post === filter) {
        return post
      }
    }) : posts

    return (
      <div className='list-container'>
        <FilterBy handleFilter={this.handleFilter}/>
        <div className='posts-list'>
          {posts.map(post => (
            <div key={post.id} className='post-item' >
              <PostEntry 
              post={post} 
              changeViewHandler={changeViewHandler} 
              deletePost={deletePost}
              editPost={editPost}/>
            </div>
          ))}
        </div>
      </div>
    )
} 
}

export default PostList