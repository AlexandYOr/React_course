import React, { Component } from 'react'
import './app.css'

class App extends Component {
  state = {
    posts: [],
    loading: true,
    comments: [],
  }


  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => res.json())
      .then(data => this.setState({ posts: data, loading: false }))

      this.timerId = setInterval(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
          .then(res => res.json())
          .then(data => this.setState({ comments: data }))
      }, 3000)
  }

componentDidUpdate() {
  console.log('componentDidUpdate')
}

componentWillUnmount() {
  clearInterval(this.timerId)
}

render() {
  return (
    <div className='App'>
      {this.setState.loading ? <h3>Loading...</h3> : <h3>
        {this.state.posts.length} was loaded
      </h3>
      }
    </div>
  )
}

}

export default App
