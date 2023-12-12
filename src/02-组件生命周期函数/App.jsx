import React, { Component } from 'react'
import HelloWorld from './HelloWorld'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }

  render() {
    const { isShow } = this.state
    return (
      <div>
        <h2>App</h2>
        <button onClick={e => this.isShowHelloWorld()}>切换</button>
        {isShow && <HelloWorld></HelloWorld>}

      </div>
    )
  }

  isShowHelloWorld() {
    this.setState({ isShow: !this.state.isShow })
  }

}

export default App