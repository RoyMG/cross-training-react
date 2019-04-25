import React from 'react'
import { Icon } from '@material-ui/core'

const PostActions = ({ id, deletePost, editPost }) => {

  return (
    <div>
      <Icon className="edit-icon" onClick={() => editPost(id)}>edit_icon</Icon>
      <Icon onClick={() => deletePost(id)}>delete_icon</Icon>
    </div>
  )
} 

export default PostActions