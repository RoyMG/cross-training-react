import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './PostList';
import FullPost from './FullPost';

const Routes = ({ posts, deletePost, editPost, handleOpen }) => (
  <Fragment>
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <PostList
            posts={posts}
            deletePost={deletePost}
            editPost={editPost}
            handleOpen={handleOpen}
          />
        )}
      />
      {/* Dianamic routing */}
      {posts.map((post, key) => (
        <div key={key}>
          <Route
            path={`/post/${post.id}`}
            render={() => <FullPost post={post} />}
          />
        </div>
      ))}
    </Router>
  </Fragment>
);

export default Routes;
