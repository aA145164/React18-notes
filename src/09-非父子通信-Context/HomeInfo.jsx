import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class HomeInfo extends Component {
  render() {
    const { color, fontSize } = this.context
    return (
      <div>
        HomeInfo: {color}{fontSize}
        <UserContext.Consumer>
          {
            value => {
              return <div>UserContext:{value.sex}</div>
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

HomeInfo.contextType = ThemeContext

export default HomeInfo