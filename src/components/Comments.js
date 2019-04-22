import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';


class Comments extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('HEY')
  }

  render() {
    const { comments } = this.props
    return (
    <div className="comments-container">
      <h4 className="comments-title">Comments</h4>
      {comments.map(comment => (
        <div className="comment-item" kay={comment.id}>
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
          <TextField multiline label="Write a comment" className='field-full-width'></TextField>
        </div>
        <Button color="primary" variant="contained" type="submit">Add</Button>
      </form>
    </div>
    )
  }
}

export default Comments
