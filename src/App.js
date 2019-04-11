import React, { PureComponent, Component } from 'react';
import PostList from './components/PostList';
import FilterBy from './components/FilterBy';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <FilterBy/>
        <PostList/>
      </div>
    );
  }
}

export default App;
