import React, { Component } from 'react';
import { getPosts } from './helpers/getPosts';
import Routes from './components/Routes';
import Header from './components/Header';
import CreateModal from './components/CreateModal';
import Login from './components/Login/Login';
import './styles/app.css';

/* This is your main component, the logic and brain of most of your 
components, your intelligent home. Use the functions we left for 
you to make your app work. Also, check the other components, 
youll see some tips in there. Remeber to pass down props */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      inptUser: '',
      userName: 'asd',
      inptPass: '',
      userPass: '123',
      isUserNoLogged: true,
      editPost: '',
      openModal: false
    };
  }

  async componentDidMount() {
    const result = await getPosts();
    // console.log(result);
    this.setState({ posts: result });
    /* in here you'll make async calls, we are using async await:
    this is a great article to understand this utility that js has
    https://medium.com/javascript-in-plain-english/javascript-async-await-and-promises-explained-like-youre-five-years-old-61733751e9a5 */
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
        editPost: ''
      });
    } else {
      newPost.id = newPost.title;
      posts.push(newPost);
      this.setState({
        posts,
        editPost: ''
      });
    }
  };

  editPost = id => {
    const { posts } = this.state;
    const post = posts.filter(inPost => inPost.id === id);
    this.setState(
      {
        editPost: post
      },
      () => this.handleOpen()
    );
  };

  deletePost = id => {
    const { posts } = this.state;
    const modPosts = posts.filter(delPost => delPost.id !== id);
    this.setState({ posts: modPosts });
  };

  handleOpen = () => {
    this.setState({
      openModal: true
    });
  };

  handleClose = () => {
    this.setState({
      openModal: false
    });
  };

  handleLogin = () => {
    const { inptPass, inptUser, userName, userPass } = this.state;
    if (inptUser === userName && inptPass === userPass)
      this.setState({ isUserNoLogged: false });
  };

  handleChange = event => {
    // console.log(event.target.id);
    let inptfld = event.target.id;
    if (inptfld === 'inptUser') {
      this.setState({ inptUser: event.target.value });
    }
    if (inptfld === 'inptPass') {
      this.setState({ inptPass: event.target.value });
    }
  };

  render() {
    const { posts, openModal, editPost } = this.state;
    const { isUserNoLogged } = this.state;
    return (
      <div className="App">
        {isUserNoLogged ? (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.handleChange}
          />
        ) : (
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
              deletePost={this.deletePost}
              handleOpen={this.handleOpen}
              editPost={this.editPost}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
