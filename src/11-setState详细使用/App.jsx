import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello World',
      counter: 0
    }
  }

  render() {
    const { message, counter } = this.state
    return (

      <div>
        <h2>{message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <div>当前技术: {counter}</div>
        <button onClick={e => this.increment()}>counter+1</button>
      </div>
    )
  }

  changeText() {
    // 1.基本使用
    // 内部通过 Object.assign 来进行对象的合并 如果属性名相同就将新的数据值赋值给属性名
    // this.setState({
    //   message: '你好啊 李银河'
    // })

    // 2. setState可以传入一个回调函数
    // 好处一：可以在回调函数中写新的state的逻辑
    // 好处二：当前的回调函数会将之前的state和props传递请求
    // this.setState((state, props) => {
    //   console.log(state.message, props)
    //   console.log(this.state.message, this.props)
    //   return {
    //     message: '你好啊 李银河'
    //   }
    // })

    // 3.setState在React的事件处理中是一个异步调用
    // 如果希望在数据更新之后(数据合并) 获取到对应的结果执行一些逻辑代码
    // 那么可以在setState中传入第二个参数：callback
    this.setState({
      message: '你好啊 李银河'
    }, () => {
      console.log('++++++++', this.state.message)
    })
    console.log('------', this.state.message)
  }

  increment() {

  }
}

export default App