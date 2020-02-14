import React, { Component } from 'react';
import { getPosts } from './helpers/getPosts';
import Routes from './components/Routes';
import Header from './components/Header';
import CreateModal from './components/CreateModal';
import FilterBy from './components/FilterBy';
import PostList from './components/PostList';
import './styles/app.css';

/* This is your main component, the logic and brain of most of your 
components, your intelligent home. Use the functions we left for 
you to make your app work. Also, check the other components, 
youll see some tips in there. Remeber to pass down props */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
      // editPost: '',
      // openModal: false,
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

  addPost = newPost => {};

  editPost = id => {};

  deletePost = id => {};

  handleOpen = () => {};

  handleClose = () => {};

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Header />
          <PostList posts={this.state.posts} />
          <CreateModal />
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
