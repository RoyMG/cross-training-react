import React from 'react'
import { Icon } from '@material-ui/core'

const PostActions = ({ title, deletePost, editPost }) => {

  return (
    <div>
      <Icon className="edit-icon" onClick={() => editPost(title)}>edit_icon</Icon>
      <Icon onClick={() => deletePost(title)}>delete_icon</Icon>
    </div>
  )
} 

export default PostActions