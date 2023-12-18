import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      info: { name: 'why', age: 18 }
    }
  }

  render() {
    const { info } = this.state
    return (
      <div>
        {/* 1. 给home传递数据 */}
        {/* <Home name={info.name} age={info.age}></Home>
        <Home {...info}></Home> */}

        {/* 2.通过context传递数据 */}
        <UserContext.Provider value={{ sex: '男' }}>
          <ThemeContext.Provider value={{ color: "red", fontSize: "20px" }}>
            <Home {...info} />
          </ThemeContext.Provider>
        </UserContext.Provider>

      </div>
    )
  }
}

export default App