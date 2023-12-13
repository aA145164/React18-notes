import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBarTwo from './NavBar-two'

export class app extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <div>left</div>
          <div>center</div>
          <div>right</div>
        </NavBar>


        <NavBarTwo left={<div>左边</div>} right={<div>右边</div>} center={<div>中间</div>} />
      </div>
    )
  }
}

export default app