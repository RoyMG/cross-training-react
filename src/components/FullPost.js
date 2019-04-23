import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Fab } from '@material-ui/core';
import Comments from './Comments';
import '../styles/fullpost.css'

const FullPost = ({ post, changeViewHandler }) => {
  const {
    title, 
    description, 
    image, 
    comments,
  } = post

  return (
    <div className='post-detail'>
    <div className='hero-banner' style={{backgroundImage: `url(${image})`}}>
      <Link to='/posts' onClick={() => changeViewHandler('posts')}>
        <Fab className='fab-back-icon'>
          <Icon className='back-icon'>chevron_left</Icon>
        </Fab>
      </Link>
      <h2 className='title'>{title}</h2>
    </div>
    <div className='body'>
      <p className='description'>
        {description}
      </p>
    </div>
    <Comments comments={comments}/>
    </div>
  )
}

export default FullPost