import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Remeber, react has lyfecycles, how are you going to update this component, 
  look for something that fits your needs in: https://reactjs.org/docs/react-component.html#the-component-lifecycle */

  handleSubmit = () => {};

  onChangeHandler = () => {};

  render() {
    return (
      <div className="comments-container">
        <h4 className="comments-title">Comments</h4>
        {[].map(comment => (
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
          {/* onSubmit will listen for a submit event on your form element, 
        what function should handle what happens when the user submits? */}
          <div>
            <TextField
              multiline
              rows="2"
              label="Write a comment"
              value="newComments"
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
