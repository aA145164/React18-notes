import React, { Component } from 'react'
import AppFun from './App_fun'


class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'App Component'
    }
  }
  render() {
    const { message } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <AppFun></AppFun>
      </div>
    )
  }
}

export default App