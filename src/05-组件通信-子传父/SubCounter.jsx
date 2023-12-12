import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SubCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e => this.subCounter(1)}>-1</button>
        <button onClick={e => this.subCounter(5)}>-5</button>
        <button onClick={e => this.subCounter(10)}>-10</button>
      </div>
    )
  }

  subCounter(count) {
    this.props.subClick(count)
  }
}

SubCounter.propTypes = {
  addClick: PropTypes.func
}
export default SubCounter