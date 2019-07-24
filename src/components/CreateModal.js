import React, { PureComponent } from 'react';
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
} from '@material-ui/core';
import '../styles/modal.css';
import { categories } from '../utils/categories';

class CreateModal extends PureComponent {
  constructor(props) {
    super(props);
    const ranImageQuery = Math.random() * 100;
    this.state = {
      id: '',
      title: '',
      shortDescription: '',
      description: '',
      category: '',
      image: `https://source.unsplash.com/random?sig=${ranImageQuery}`,
    };
  }

  componentDidUpdate(prevProps) {
    const { editPost } = this.props;
    if (editPost !== prevProps.editPost && editPost) {
      const post = editPost[0];
      this.setState({
        id: post.id,
        title: post.title,
        shortDescription: post.shortDescription,
        description: post.description,
        category: post.category,
        image: post.image,
      });
    }
  }

  clearStateAfterClose = () => {
    const { handleClose } = this.props;
    const ranImageQuery = Math.random() * 100;
    this.setState(
      {
        id: '',
        title: '',
        shortDescription: '',
        description: '',
        category: '',
        image: `https://source.unsplash.com/random?sig=${ranImageQuery}`,
      },
      () => handleClose()
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { addPost } = this.props;
    const {
      id,
      category,
      shortDescription,
      description,
      image,
      title,
    } = this.state;

    const post = {
      id,
      category,
      shortDescription,
      description,
      image,
      title,
    };
    addPost(post);
    this.clearStateAfterClose();
  };

  render() {
    const { status } = this.props;
    const {
      title,
      shortDescription,
      description,
      category,
      image,
    } = this.state;
    return (
      <div>
        <Dialog
          className="create-modal"
          open={status || false}
          onClose={this.handleClose}
        >
          <form onSubmit={this.onSubmitHandler}>
            <DialogTitle style={{ textAlign: 'center' }}>
              Create Post
            </DialogTitle>
            <DialogContent>
              <TextField
                name="title"
                className="modal-field"
                autoFocus
                label="Title"
                type="text"
                value={title}
                onChange={this.handleChange}
                fullWidth
                required
              />
              <TextField
                name="shortDescription"
                className="modal-field"
                label="Short Description"
                type="text"
                multiline
                value={shortDescription}
                onChange={this.handleChange}
                fullWidth
                required
              />
              <TextField
                name="description"
                className="modal-field"
                label="Description"
                type="text"
                multiline
                value={description}
                onChange={this.handleChange}
                fullWidth
                required
              />
              <FormControl fullWidth className="modal-field">
                <InputLabel htmlFor="category-select">Category</InputLabel>
                <Select
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                  input={<Input id="category-select" />}
                  fullWidth
                >
                  {categories.map((categ, key) => (
                    <MenuItem key={key} value={`${categ}`}>
                      {categ}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className="modal-field">
                <InputLabel htmlFor="image-url">Image URL</InputLabel>
                <Input
                  name="image"
                  id="image-url"
                  value={image}
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
              <Button
                onClick={this.clearStateAfterClose}
                color="primary"
                type="button"
              >
                Cancel
              </Button>
              <Button color="primary" variant="contained" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default CreateModal;
