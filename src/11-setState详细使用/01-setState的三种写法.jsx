import React, { Component } from 'react'

function Hello(props) {
  return <div>{props.message}</div>
}

export class App extends Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello World',
      counter: 0
    }
  }

  render() {
    console.log('render函数被执行')
    const { counter, message } = this.state
    return (

      <div>
        <h2>{message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <div>当前计数: {counter}</div>
        <button onClick={e => this.increment()}>counter+1</button>

        <Hello message={message} />
      </div>
    )
  }

  increment() {
    // 会被自动合并，render只会执行一次，this.setState会被执行三次，
    //但是他的值仍为1 是因为 他是异步的，执行三次this.state.counter的值都为0 那么0 + 1为1
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // 这样就可以执行三次，因为this.setState中的state参数为最新的值，
    // 不可以用this.state.counter 加上this后他的值不是最新的 还是0
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
  }

  changeText() {
    // 如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步 所以设置为异步
    this.setState({
      message: '你好啊 李银河'
    })
  }
}

export default App