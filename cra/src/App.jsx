import React, { Component } from 'react'
import {Posts} from './components/Posts'
import './App.css'

class App extends Component {
  state = {
    posts: [
      {id: 'abc1', name: 'JS1'},
      {id: 'abc2', name: 'JS2'},
      {id: 'abc4', name: 'JS3'},
      {id: 'abc5', name: 'JS4'},
      {id: 'abc6', name: 'JS5'},
      {id: 'abc7', name: 'JS6'},
      {id: 'abc8', name: 'JS7'},
      {id: 'abc9', name: 'JS8'},
    ],
  }

  handleDelete = (id) => {
    this.setState((state) => {
      return {
        posts: state.posts.filter((obj) => id !== obj.id),
      }
    })
  }
  componentDidUpdate() {
    console.log('update')
  }
  
  render() {
    const {posts} = this.state 
    return (
      <div className='App'>
        <Posts posts={posts} cb={this.handleDelete}/>
      </div>
    )

  }
}

export default App
