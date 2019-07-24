import React, { Component } from 'react';
import { Fab, Icon } from '@material-ui/core';
import { getPosts } from './helpers/getPosts';
import Routes from './components/Routes';
import Header from './components/Header';
import CreateModal from './components/CreateModal';
import './styles/app.css';

const createBttnStyle = {
  backgroundColor: 'coral',
  position: 'fixed',
  top: '138px',
  right: '20px',
  zIndex: '1',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      view: 'posts',
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

  changeViewHandler = view => {
    this.setState({
      view,
    });
  };

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
    const { view, posts, editPost, openModal } = this.state;
    return (
      <div className="App">
        <div className="app-container">
          <Header />
          {view !== 'full' ? (
            <Fab
              style={createBttnStyle}
              aria-label="Edit"
              onClick={this.handleOpen}
            >
              <Icon className="icon-mui">edit_icon</Icon>
            </Fab>
          ) : null}
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
