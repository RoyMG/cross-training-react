import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostList from './PostList';
import FullPost from './FullPost';

const Routes = ({ posts, changeViewHandler }) => {

  return (
    <Router>
      <Route exact path='/' 
      render={() => <PostList posts={posts} changeViewHandler={changeViewHandler}/>}/>
      <Route path='/posts' 
      render={() => <PostList posts={posts} changeViewHandler={changeViewHandler}/>}/>
      {/*Dianamic routing*/}
      {posts.map((post, key)=> (
        <div key={key}>
          <Route path={`/post/${key+1}`} 
          render={() => <FullPost post={post} changeViewHandler={changeViewHandler}/>}/>
        </div>
      ))}
    </Router>
  )
}

export default Routes
