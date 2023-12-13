import React, { Component } from 'react'
import TabHeader from './tabHeader'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      titles: ['流行', '新款', '精选'],
      tabIndex: 0
    }
  }
  render() {
    const { titles, tabIndex } = this.state
    return (
      <div>
        <TabHeader titles={titles} tabClick={index => this.getTabIndex(index)} />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }

  getTabIndex(tabIndex) {
    this.setState({
      tabIndex
    })
  }
}

export default App