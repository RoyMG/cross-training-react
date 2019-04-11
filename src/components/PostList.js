import React, { Component } from 'react'
import PostEntry from './PostEntry';
import PostActions from './PostActions';
import { getPosts } from '../helpers/getPosts';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentWillMount () {
    const results = await getPosts()
    this.setState({
      posts: results
    })
  }


  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <div className="post" key={post.id}>
            <a>
              <div className="post-background">
                <PostEntry post={post}/>
              </div>
            </a>
            <PostActions id={post.id}/>
          </div>
        ))}
      </div>
    )
  }
}

export default PostList