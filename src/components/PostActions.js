import React from 'react';
import { Icon } from '@material-ui/core';
// what should this icons do? and what component cares about this?
// remeber that react has event listeners to trigger actions

const PostActions = ({ id, deletePost }) => (
  <div>
    <Icon className="edit-icon">edit_icon</Icon>
    <Icon onClick={() => deletePost(id)}>delete_icon</Icon>
  </div>
);

export default PostActions;
