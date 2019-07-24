import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './PostList';
import FullPost from './FullPost';

const Routes = ({ posts, changeViewHandler, deletePost, editPost }) => (
  <Router>
    <Route
      exact
      path="/"
      render={() => (
        <PostList
          posts={posts}
          changeViewHandler={changeViewHandler}
          deletePost={deletePost}
          editPost={editPost}
        />
      )}
    />
    <Route
      path="/posts"
      render={() => (
        <PostList
          posts={posts}
          changeViewHandler={changeViewHandler}
          deletePost={deletePost}
          editPost={editPost}
        />
      )}
    />
    {/* Dianamic routing */}
    {posts.map((post, key) => (
      <div key={key}>
        <Route
          path={`/post/${post.id}`}
          render={() => (
            <FullPost post={post} changeViewHandler={changeViewHandler} />
          )}
        />
      </div>
    ))}
  </Router>
);

export default Routes;
