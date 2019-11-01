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
  Select,
} from '@material-ui/core';

class CreateModal extends PureComponent {
  constructor(props) {
    super(props);
    /* this image random number must exist to have a random image, 
    for more info on why, read the comments on this issue: https://github.com/unsplash/unsplash-source-js/issues/9 
    */
    const ranImageQuery = Math.random() * 100;
    // so this is your modal state, we'll leave that in for you =)
    this.state = {
      //   id: '',
      //   title: '',
      //   shortDescription: '',
      //   description: '',
      //   category: '',
      //   image: `https://source.unsplash.com/random?sig=${ranImageQuery}`,
      // };
    };
  }

  // component must mount with selected post data, try componentDidMount

  clearStateAfterClose = () => {}; // its important to clear the state after closing the modal, what do you want to do after someone navigates out of the modal

  handleChange = () => {}; // this must be your function to handle changes on inputs, ask yourself where should you store the new inputs and how?

  onSubmitHandler = () => {}; /* same as handleChange, but this time for submitting a form element, 
  what do you want to do after someone submits? think "outside the component"... */

  render() {
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
        <Dialog className="create-modal" open={false}>
          <form>
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
                value=""
                onChange={() => {}}
                fullWidth
                required
              />
              <TextField
                name="shortDescription"
                className="modal-field"
                label="Short Description"
                type="text"
                multiline
                value=""
                onChange={() => {}}
                fullWidth
                required
              />
              <TextField
                name="description"
                className="modal-field"
                label="Description"
                type="text"
                multiline
                value=""
                onChange={() => {}}
                fullWidth
                required
              />
              <FormControl fullWidth className="modal-field">
                <InputLabel htmlFor="category-select">Category</InputLabel>
                <Select
                  name="category"
                  value=""
                  onChange={() => {}}
                  input={<Input id="category-select" />}
                  fullWidth
                >
                  {/* this one is a tricky one, we use map to render components dynamically, 
                  since map is an array method, well... it must be an array...
                  */}
                  {[].map((categ, key) => (
                    <MenuItem key={key} value="">
                      ""
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className="modal-field">
                <InputLabel htmlFor="image-url">Image URL</InputLabel>
                <Input
                  name="image"
                  id="image-url"
                  value=""
                  onChange={() => {}}
                  endAdornment={
                    <InputAdornment position="end">
                      <Icon>link</Icon>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => {}} color="primary" type="button">
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
