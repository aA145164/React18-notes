import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e => this.addCounter(1)}>+1</button>
        <button onClick={e => this.addCounter(5)}>+5</button>
        <button onClick={e => this.addCounter(10)}>+10</button>
      </div>
    )
  }

  addCounter(count) {
    this.props.addClick(count)
  }
}

AddCounter.propTypes = {
  addClick: PropTypes.func
}

export default AddCounter