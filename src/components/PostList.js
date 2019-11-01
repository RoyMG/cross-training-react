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
  zIndex: '1',
};

// this component is your Post entry container, your list of posts
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // filter: 'All',
    };
  }

  // we'll leave this in for you, also we'll pass it down to FilterBy component =)
  handleFilter = category => {};

  render() {
    return (
      <div className="list-container">
        <Fab style={createBttnStyle} aria-label="Edit" onClick={() => {}}>
          <Icon className="icon-mui">edit_icon</Icon>
        </Fab>
        <FilterBy handleFilter={this.handleFilter} />
        <div className="posts-list">
          {/* tip: dynamically render your post entries */}
        </div>
      </div>
    );
  }
}

export default PostList;
