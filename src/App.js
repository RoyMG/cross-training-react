import React, { Component } from 'react';
import { getPosts } from './helpers/getPosts';
import Routes from './components/Routes';
import Header from './components/Header';

import { Fab, Icon } from '@material-ui/core'

class App extends Component {
  state = {
    posts: [],
  }

  async componentDidMount () {
    const results = await getPosts()
    this.setState({
      posts: results,
    })
  }

  render() {
    const { posts } = this.state

    return (
      <div className="App">
        <Header/>
        <Fab color="secondary" aria-label="Edit" >
          <Icon>edit_icon</Icon>
        </Fab>
        <Routes posts={posts}/>
      </div>
    );
  }
}

export default App;
