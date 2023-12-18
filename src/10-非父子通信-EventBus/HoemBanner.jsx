import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export class HoemBanner extends Component {

  prveClick() {
    eventBus.emit('bannerPrev', 'why', 18, 1.88)
  }

  nextClick() {
    eventBus.emit('bannerNext', { nickname: '卡沙', level: 99 })
  }

  render() {
    return (
      <div>
        HoemBanner:
        <button onClick={e => this.prveClick()}>上一个</button>
        <button onClick={e => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HoemBanner