import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class App extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      age: 0,
      height: 0
    }
  }

  componentDidMount() {
    eventBus.on('bannerPrev', this.bannerPrevClick, this)
    eventBus.on('bannerNext', this.bannerNextClick, this)
  }

  componentWillUnmount() {
    eventBus.off('bannerPrev', this.bannerPrevClick, this)
    eventBus.off('bannerNext', this.bannerNextClick, this)
  }

  render() {
    return (
      <div>App
        <Home />

      </div>
    )
  }

  bannerPrevClick(name, age, height) {
    console.log('app中监听到的bannerPrev', name, age, height)
    this.setState({ name, age, height })
  }

  bannerNextClick(obj) {
    console.log('app中监听到的bannerNextClick', obj.nickname, obj.level)
  }
}

export default App