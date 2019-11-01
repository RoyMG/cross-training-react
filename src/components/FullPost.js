import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Fab } from '@material-ui/core';
import Comments from './Comments';
import '../styles/fullpost.css';

/* This is a Dummy Comnponent, which means it does not have any logic, 
it just renders with the props we pass down to it and the jsx we define inside.
You should try passing props into the functional component arguments, 
but what data should the props object contain?
*/

const FullPost = () => (
  <div className="post-detail">
    <div className="hero-banner" style={{ backgroundImage: `url()` }}>
      <Link to="/">
        <Fab className="fab-back-icon">
          <Icon className="back-icon">chevron_left</Icon>
        </Fab>
      </Link>
      <h2 className="title">{}</h2>
    </div>
    <div className="body">
      <p className="description">{}</p>
    </div>
    <Comments comments={[]} />
  </div>
);

export default FullPost;
