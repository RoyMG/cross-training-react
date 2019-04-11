import React, { PureComponent } from 'react'

class PostActions extends PureComponent {
  
  render() {
    return (
      <div>
        <div className="post-actions">
          <button mat-icon-button >
            <mat-icon aria-label="Edit a Post">edit</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon aria-label="Delete a Post">delete</mat-icon>
          </button>
        </div> 
      </div>
    )
  }
}

export default PostActions