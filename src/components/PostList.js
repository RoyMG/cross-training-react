import React, { Component } from 'react';
import { Fab, Icon } from '@material-ui/core';
import PostEntry from './PostEntry';
import FilterBy from './FilterBy';
import '../styles/posts.css';

const createBttnStyle = {
  backgroundColor: 'coral',
  position: 'fixed',
  top: '138px',
  right: '20px',
  zIndex: '1',
};

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
  }

  handleFilter = category => {
    this.setState({
      filter: category,
    });
  };

  render() {
    const { deletePost, editPost, handleOpen } = this.props;
    let { posts } = this.props;
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
          {posts.map(post => (
            <div key={post.id} className="post-item">
              <PostEntry
                post={post}
                deletePost={deletePost}
                editPost={editPost}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostList;
