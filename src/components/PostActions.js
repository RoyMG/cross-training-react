import React, { PureComponent } from 'react'
import { Button } from '@material-ui/core'

class PostActions extends PureComponent {
  
  render() {
    return (
      <div>
        <div className="post-actions">
          <Button variant="contained" color="primary" >
            <mat-icon aria-label="Edit a Post">edit</mat-icon>
          </Button>
          <Button variant="contained" color="primary">
            <mat-icon aria-label="Delete a Post">delete</mat-icon>
          </Button>
        </div> 
      </div>
    )
  }
}

export default PostActions