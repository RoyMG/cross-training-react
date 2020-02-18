import React, { PureComponent } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  InputLabel,
  DialogActions,
  Icon,
  Input,
  InputAdornment,
  MenuItem,
  Button,
  Select
} from '@material-ui/core';
import { categories } from '../utils/categories';

class CreateModal extends PureComponent {
  constructor(props) {
    super(props);
    /* this image random number must exist to have a random image, 
    for more info on why, read the comments on this issue: https://github.com/unsplash/unsplash-source-js/issues/9 
    */
    const ranImageQuery = Math.random() * 100;
    // so this is your modal state, we'll leave that in for you =)
    this.state = {
      id: '',
      title: '',
      shortDescription: '',
      description: '',
      category: '',
      image: `https://source.unsplash.com/random?sig=${ranImageQuery}`
    };
  }

  // component must mount with selected post data, try componentDidMount
  componentDidUpdate(prevProps) {
    const { editPost } = this.props;
    if (editPost !== prevProps.editPost && editPost) {
      const post = editPost[0];
      console.log(post);
      this.setState({
        id: post.id,
        title: post.title,
        shortDescription: post.shortDescription,
        description: post.description,
        category: post.category,
        image: post.image
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
        image: `https://source.unsplash.com/random?sig=${ranImageQuery}`
      },
      () => handleClose()
    );
    // handleClose();
  }; // its important to clear the state after closing the modal, what do you want to do after someone navigates out of the modal

  handleChange = e => {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }; // this must be your function to handle changes on inputs, ask yourself where should you store the new inputs and how?

  onSubmitHandler = e => {
    e.preventDefault();
    const { addPost } = this.props;
    const {
      id,
      category,
      shortDescription,
      description,
      image,
      title
    } = this.state;

    const post = {
      id,
      category,
      shortDescription,
      description,
      image,
      title,
      comments: []
    };
    addPost(post);
    this.clearStateAfterClose();
  }; /* same as handleChange, but this time for submitting a form element, 
  what do you want to do after someone submits? think "outside the component"... */

  render() {
    const { status } = this.props;
    const {
      title,
      shortDescription,
      description,
      category,
      image
    } = this.state;
    return (
      /* we'll help you out with the styling and Material UI components my friend. 
      Feel free to erase everything and make your own ;). 
      But if you dont want to, consider that all of this components have their own API and documentation, 
      reading them is a must. This is how you will know how to make them work the way you want. 
      You'll notice some empty arrow functions in event listeners (onChange for example), what do you think shoud go in there?
      */
      <div>
        {/* 
        When do you want to open the modal? how do you do this progrmatically? 
        Tip: This must be a boolean, true will open it...
        */}
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
                  {/* this one is a tricky one, we use map to render components dynamically, 
                  since map is an array method, well... it must be an array...
                  */}
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
                {' '}
                {/* type submit? this will make your form element perform a submit event, 
                use it on your advantage with your submit handler */}
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
