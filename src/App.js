import React, { Component } from 'react';
import { getPosts } from './helpers/getPosts';
import Routes from './components/Routes';
import Header from './components/Header';
import { Fab, Icon } from '@material-ui/core'
import './styles/app.css'

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
      <div className='app'>
        <Header/>
        <Fab className='fab' aria-label="Edit" >
          <Icon className='icon-mui'>edit_icon</Icon>
        </Fab>
        <Routes posts={posts}/>
      </div>
      </div>
    );
  }
}

export default App;
