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
  getTabItem(item) {
    if (item === '流行') {
      return <div>流行</div>
    } else if (item === '新款') {
      return <button>新款</button>
    } else if (item === '精选') {
      return <i>精选</i>
    }
  }

  render() {
    const { titles, tabIndex } = this.state
    return (
      <div>
        <TabHeader
          titles={titles}
          tabClick={index => this.getTabIndex(index)}
          // typeItem={item => <button>{item}</button>}
          typeItem={item => this.getTabItem(item)}
        />
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