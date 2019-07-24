import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComments: '',
      comments: [],
    };
  }

  componentDidMount() {
    const { comments } = this.props;

    this.setState({
      comments,
    });
  }

  handleSubmit = e => {
    const { comments, newComments } = this.state;
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      content: newComments,
      author: 'Scooby',
    };
    comments.push(newComment);
    this.setState({
      newComments: '',
      comments,
    });
  };

  onChangeHandler = e => {
    this.setState({
      newComments: e.target.value,
    });
  };

  render() {
    const { newComments, comments } = this.state;
    return (
      <div className="comments-container">
        <h4 className="comments-title">Comments</h4>
        {comments.map(comment => (
          <div className="comment-item" key={comment.id}>
            <div className="icon">
              <i className="material-icons">account_circle</i>
            </div>
            <div className="comment-item-content">
              <div className="author">{comment.author}</div>
              <div className="comment">{comment.content}</div>
            </div>
          </div>
        ))}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <div>
            <TextField
              multiline
              rows="2"
              label="Write a comment"
              value={newComments}
              className="field-full-width"
              onChange={this.onChangeHandler}
            />
          </div>
          <Button color="primary" variant="contained" type="submit">
            Add
          </Button>
        </form>
      </div>
    );
  }
}

export default Comments;
