import React, { PureComponent } from 'react'
import {
  Icon,
  Button,
  Input,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputAdornment,
} from '@material-ui/core'
import '../styles/modal.css'
import { categories } from '../utils/categories';

class CreateModal extends PureComponent {
  constructor(props) {
    super(props)
    const ranImageQuery = Math.random() * 100
    this.state = {
      id: '',
      title: '',
      publishedAt: '',
      shortDescription: '',
      description: '',
      category: '',
      image: `https://source.unsplash.com/random?sig=${ranImageQuery}`
    }
  }


  componentDidUpdate(prevProps) {
    if (this.props.editPost !== prevProps.editPost && this.props.editPost) {
      const { editPost } = this.props
      const post = editPost[0]
      this.setState({
        id: post.id,
        comments: post.comments,
        publishedAt: post.publishedAt,
        title: post.title,
        shortDescription: post.shortDescription,
        description: post.description,
        category: post.category,
        image: post.image
      })
    }
  }


  clearStateAfterClose = () => {
    const ranImageQuery = Math.random() * 100
    this.setState({
      id: '',
      title: '',
      publishedAt: '',
      shortDescription: '',
      description: '',
      category: '',
      image: `https://source.unsplash.com/random?sig=${ranImageQuery}`
    }, () => this.props.handleClose())
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    const { addPost } = this.props
    const post = {
      id: this.state.id,
      category: this.state.category,
      comments: [],
      publishedAt: Date.now(),
      shortDescription: this.state.shortDescription,
      description: this.state.description,
      image: this.state.image,
      title: this.state.title
    }
    addPost(post)
    this.clearStateAfterClose()
  }

  render() {
    const { status } = this.props
    return (
      <div >
        <Dialog
          className="create-modal"
          open={status || false}
          onClose={this.handleClose}
        >
          <form onSubmit={this.onSubmitHandler}>
            <DialogTitle style={{ textAlign: 'center'}}>Create Post</DialogTitle>
            <DialogContent>
              <TextField
                name='title'
                className="modal-field"
                autoFocus
                label="Title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name='shortDescription'
                className="modal-field"
                label="Short Description"
                type="text"
                multiline
                value={this.state.shortDescription}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name='description'
                className="modal-field"
                label="Description"
                type="text"
                multiline
                value={this.state.description}
                onChange={this.handleChange}
                fullWidth
              />
              <FormControl fullWidth className="modal-field">
                <InputLabel htmlFor='category-select'>Category</InputLabel>
                <Select
                  name='category'
                  value={this.state.category}
                  onChange={this.handleChange}
                  input={<Input id="category-select" />}
                  fullWidth
                >
                  {categories.map((category, key) => (
                    <MenuItem 
                      key={key} 
                      value={`${category}`}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className="modal-field">
                <InputLabel htmlFor="image-url">Image URL</InputLabel>
                <Input
                name='image'
                id="image-url"
                value={this.state.image}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <Icon>link</Icon>
                  </InputAdornment>
                }
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.clearStateAfterClose} color="primary" type="button">
                Cancel
              </Button>
              <Button color="primary" variant="contained" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
      
    )
  }
}

export default CreateModal