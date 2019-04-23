import React, { Component } from 'react'
import {
  Fab,
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

class CreateModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: '',
      description: '',
      category: '',
      image: 'https://source.unsplash.com/random'
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  titleChangeHandler = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  descriptionChangeHandler = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  selectChangeHandler = (e) => {
    this.setState({
      category: e.target.value
    })
  }
  urlChangeHandler = (e) => {
    this.setState({
      image: e.target.value
    })
  }

  onSubmithandler = (e) => {
    e.preventDefault()
    const post = {
      category: this.state.category,
      comments: [],
      publishedAt: Date.now(),
      shortDescription: '',
      description: this.state.description,
      image: this.state.image,
      title: this.state.title
    }
    this.props.addPost(post)
  }

  render() {
    return (
      <div >
        <Fab className='fab' aria-label="Edit" onClick={this.handleOpen} >
          <Icon className='icon-mui'>edit_icon</Icon>
        </Fab>
        <Dialog
          className="create-modal"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <form onSubmit={this.onSubmithandler}>
            <DialogTitle style={{ textAlign: 'center'}}>Create Post</DialogTitle>
            <DialogContent>
                <TextField
                  className="modal-field"
                  autoFocus
                  label="Title"
                  type="text"
                  value={this.state.title}
                  onChange={this.titleChangeHandler}
                  fullWidth
                  />
                <TextField
                  className="modal-field"
                  label="Description"
                  type="text"
                  multiline
                  value={this.state.description}
                  onChange={this.descriptionChangeHandler}
                  fullWidth
                  />
                <FormControl fullWidth style={{minWidth: '120px'}} className="modal-field">
                  <InputLabel htmlFor='category-select'>Category</InputLabel>
                  <Select
                  value={this.state.category}
                  onChange={this.selectChangeHandler}
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
                  id="image-url"
                  value={this.state.image}
                  onChange={this.imageChangeHandler}
                  endAdornment={
                    <InputAdornment position="end">
                      <Icon>link</Icon>
                    </InputAdornment>
                  }
                  />
                </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary" variant="contained" type="submit">
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