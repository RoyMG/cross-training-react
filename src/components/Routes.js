import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PostList from './PostList';
import FullPost from './FullPost';

const Routes = ({ posts }) => {

  return (
    <Router basename='/posts'>
      <Route exact path='/' 
      render={() => <PostList posts={posts}/>}/>
      <Route path='/posts' 
      render={() => <PostList posts={posts}/>}/>
      {/*Dianamic routing*/}
      {posts.map((post, key)=> (
        <div key={key}>
          <Route path={`/post/${key+1}`} 
          render={() => <FullPost post={post}/>}/>
        </div>
      ))}
    </Router>
  )
}

export default Routes
