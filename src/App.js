import React, { Component } from 'react';
import { getPosts } from './helpers/getPosts';
import Routes from './components/Routes';
import Header from './components/Header';
import CreateModal from './components/CreateModal';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      editPost: '',
      openModal: false,
    };
  }

  async componentDidMount() {
    const results = await getPosts();
    this.setState({
      posts: results,
    });
  }

  addPost = newPost => {
    const { posts } = this.state;
    const isEdit = posts.find(post => post.id === newPost.id);
    if (isEdit) {
      const modPosts = posts.map(post =>
        post.id === newPost.id ? newPost : post
      );
      this.setState({
        posts: modPosts,
        editPost: '',
      });
    } else {
      newPost.id = newPost.title;
      posts.push(newPost);
      this.setState({
        posts,
        editPost: '',
      });
    }
  };

  editPost = id => {
    const { posts } = this.state;
    const post = posts.filter(inPost => inPost.id === id);
    this.setState(
      {
        editPost: post,
      },
      () => this.handleOpen()
    );
  };

  deletePost = id => {
    const { posts } = this.state;
    const modPosts = posts.filter(inPost => inPost.id !== id);
    this.setState({
      posts: modPosts,
    });
  };

  handleOpen = () => {
    this.setState({
      openModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      editPost: '',
      openModal: false,
    });
  };

  render() {
    const { posts, editPost, openModal } = this.state;
    return (
      <div className="App">
        <div className="app-container">
          <Header />
          <CreateModal
            status={openModal}
            handleClose={this.handleClose}
            addPost={this.addPost}
            editPost={editPost}
          />
          <Routes
            posts={posts}
            editPost={this.editPost}
            deletePost={this.deletePost}
            handleOpen={this.handleOpen}
          />
        </div>
      </div>
    );
  }
}

export default App;
