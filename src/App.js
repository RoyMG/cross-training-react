import React, { Component } from 'react';
import { getPosts } from './helpers/getPosts';
import Routes from './components/Routes';
import Header from './components/Header';
import CreateModal from './components/CreateModal';
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      view: 'posts',
    }

  }


  async componentDidMount () {
    const results = await getPosts()
    console.log(results)
    this.setState({
      posts: results,
    })
  }

  changeViewHandler = (view) => {
    this.setState({
      view: view
    })
  }

  addPost = (post) => {
    const posts = this.state.posts
    post.id = posts.length+1
    posts.push(post)
    this.setState({
      posts: posts
    })
  }

  render() {
    const { view, posts } = this.state
    return (
      <div className="App">
      <div className='app'>
        <Header/>
        {view === 'posts' 
          ?
          (
            <CreateModal addPost={this.addPost}/>
          ) 
          : 
            null
        }
        <Routes posts={posts} changeViewHandler={this.changeViewHandler}/>
      </div>
      </div>
    );
  }
}

export default App;
