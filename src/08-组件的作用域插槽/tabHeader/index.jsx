import React, { Component } from 'react'
import './style.css'

class TabHeader extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const { titles, typeItem } = this.props
    const { currentIndex } = this.state
    return (
      <div className='tab-head'>
        {
          titles.map((item, index) => {
            return (
              <div className={`item ${currentIndex === index ? 'avtive' : ''}`}
                onClick={e => this.getTabIndex(index)}
                key={item}>
                {/* <span className='text'>{item}</span> */}
                {typeItem(item)}
              </div>
            )
          })
        }
      </div>
    )
  }

  getTabIndex(index) {
    this.setState({
      currentIndex: index
    })
    this.props.tabClick(index)
  }
}

export default TabHeader