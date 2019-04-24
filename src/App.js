import React, { Component } from 'react';
import { Fab, Icon } from '@material-ui/core';
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
      editPost: '',
      modalOpen: false,
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
      posts: posts,
      view: 'posts',
      editPost: ''
    })
  }

  editPost = (title) => {
    const post = this.state.posts.filter(post => {
      if(post.title === title) {
        return post
      }
    })
    this.setState({
      editPost: post
    }, () => this.handleOpen())
  }

  deletePost = (title) => {
    const posts = this.state.posts.filter(post => {
      if(post.title !== title) {
        return post
      }
    })
    this.setState({
      posts: posts
    })
  }

  handleOpen = () => {
    this.setState({
      openModal: true
    })
  }

  handleClose = () => {
    this.setState({
      editPost: '',
      openModal: false
    })
  }

  render() {
    const { view, posts, editPost, openModal } = this.state
    return (
      <div className="App">
      <div className='app-container'>
        <Header/>
        {view !== 'full' 
          ?
          (
            <Fab className='fab' aria-label="Edit" onClick={this.handleOpen} >
              <Icon className='icon-mui'>edit_icon</Icon>
            </Fab>
          ) 
          : 
            null
        }
        <CreateModal 
        status={openModal} 
        handleClose={this.handleClose} 
        addPost={this.addPost} 
        editPost={editPost}
        />
        <Routes 
        posts={posts} 
        changeViewHandler={this.changeViewHandler} 
        editPost={this.editPost}
        deletePost={this.deletePost}
        />
      </div>
      </div>
    );
  }
}

export default App;
