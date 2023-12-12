import React, { Component } from 'react'

export class HelloWorld extends Component {
  // 1. 构造方法
  constructor() {
    console.log('HelloWorld constructor')
    super()
    this.state = {
      message: 'HelloWorld'
    }
  }

  // 2. 执行render方法
  render() {
    console.log('HelloWorld render')
    const { message } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={e => this.changeText()}>修改</button>
      </div>
    )
  }

  // 3. 组件被渲染到DOM：被挂在上DOM上面
  // constructor -> render -> componentDidMount
  componentDidMount() {
    console.log('HelloWorld componentDidMount')
  }

  // 4. 组件的DOM更新完成： DOM发生更新
  // constructor -> render -> componentDidMount -> render -> componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('HelloWorld componentDidUpdate', prevProps, prevState, snapshot)
  }

  // 5. 组件被DOM中被卸载掉
  componentWillUnmount() {
    console.log('HelloWorld componentWillUnmount')
  }

  //不常用的生命周期补充
  //  控制要不要重新执行 render函数
  shouldComponentUpdate() {
    console.log('HelloWorld shouldComponentUpdate')
    return true
  }

  // 提前保存一些数据 
  getSnapshotBeforeUpdate() {
    return {
      useScroll: 1000
    }
  }

  changeText() {
    this.setState({ message: '你好呀 李银河' })
  }

}

export default HelloWorld