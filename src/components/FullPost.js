import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const FullPost = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        {post.description}
      </p>
      <Link to='/'>
        <Button variant="contained" color="primary">BACK</Button>
      </Link>
    </div>
  )
}

export default FullPost