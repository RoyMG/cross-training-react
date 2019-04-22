import React, { PureComponent } from 'react'
import { Icon } from '@material-ui/core'

class PostActions extends PureComponent {
  
  render() {
    return (
      <div>
        <Icon>edit_icon</Icon>
        <Icon>delete_icon</Icon>
      </div>
    )
  }
}

export default PostActions