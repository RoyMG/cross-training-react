import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';


class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newComments: '',
      comments: []
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {
      id: this.props.comments.length + 1,
      content: this.state.newComments,
      author: 'Scooby'
    }
    this.props.comments.push(newComment)
    this.setState({
      newComments: '',
      comments: this.props.comments
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      newComments:e.target.value
    })
  }

  render() {
    const { comments } = this.props
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
          <TextField multiline rows="2" label="Write a comment" value={this.state.newComments} className='field-full-width' onChange={this.onChangeHandler}/>
        </div>
        <Button color="primary" variant="contained" type="submit">Add</Button>
      </form>
    </div>
    )
  }
}

export default Comments
