import React, { Component } from 'react';
import { Fab, Icon } from '@material-ui/core';
import PostEntry from './PostEntry';
import FilterBy from './FilterBy';
import '../styles/posts.css';

// This is called inline styling, usefull for quick styling. This object will contain the style rules we need for the Fab component below.
const createBttnStyle = {
  backgroundColor: 'coral',
  position: 'fixed',
  top: '138px',
  right: '20px',
  zIndex: '1'
};

// this component is your Post entry container, your list of posts
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All'
    };
  }

  // we'll leave this in for you, also we'll pass it down to FilterBy component =)
  handleFilter = category => {
    this.setState({
      filter: category
    });
  };

  render() {
    let { posts } = this.props;
    const { deletePost, handleOpen } = this.props;
    let { filter } = this.state;
    posts =
      filter !== 'All'
        ? posts.filter(post => {
            const postCat = post.category.toLowerCase();
            filter = filter.toLowerCase();
            return postCat === filter;
          })
        : posts;

    return (
      <div className="list-container">
        <Fab style={createBttnStyle} aria-label="Edit" onClick={handleOpen}>
          <Icon className="icon-mui">edit_icon</Icon>
        </Fab>
        <FilterBy handleFilter={this.handleFilter} />
        <div className="posts-list">
          {posts.map(posts => (
            <div key={posts.id} className="post-item">
              <PostEntry post={posts} deletePost={deletePost} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostList;
