import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { getPosts } from './helpers/getPosts';
import PostList from './components/PostList';
import Header from './components/Header';
import FullPost from './components/FullPost';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      post: null
    }
    this.handlePostClick = this.handlePostClick.bind(this)
    this.handleBackClick = this.handleBackClick.bind(this)
  }

  async componentWillMount () {
    const results = await getPosts()
    this.setState({
      posts: results,
    })
  }

  handlePostClick(id) {
    const { posts } = this.state
    for (let i = 0; i < posts.length; i++) {
      if(posts[i].id === id) {
        this.setState({
          post: posts[i],
        })
      }
    }
  }

  handleBackClick() {
    this.setState({
      post: null
    })
  }



  render() {
    const { posts, post } = this.state
    return (
      <div className="App">
        <Header/>
        <div>
          {post 
          ? 
          (<FullPost handleBackClick={this.handleBackClick} post={post}/>) 
          : 
          (<PostList handlePostClick={this.handlePostClick} posts={posts}/>)} 
        </div>
      </div>
    );
  }
}

export default App;
