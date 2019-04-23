import React, { PureComponent } from 'react';
import { getPosts } from './helpers/getPosts';
import Routes from './components/Routes';
import Header from './components/Header';
import { Fab, Icon } from '@material-ui/core'
import './styles/app.css'

class App extends PureComponent {
  state = {
    posts: [],
    view: '',
  }

  async componentDidMount () {
    const results = await getPosts()
    console.log(results)
    this.setState({
      view: 'posts',
      posts: results,
    })
  }

  changeViewHandler = (view) => {
    this.setState({
      view: view
    })
  }

  render() {
    const { view, posts } = this.state
    return (
      <div className="App">
      <div className='app'>
        <Header/>
        {view === 'posts' ?
          (<Fab className='fab' aria-label="Edit" >
            <Icon className='icon-mui'>edit_icon</Icon>
          </Fab>) : null
        }
        <Routes posts={posts} changeViewHandler={this.changeViewHandler}/>
      </div>
      </div>
    );
  }
}

export default App;
