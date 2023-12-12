import React, { Component } from 'react'
import Headers from './c-cpns/Header'
import Main from './c-cpns/Main'
import Footer from './c-cpns/Footer'

class App extends Component {


  render() {
    return (
      <div className='app'>
        <Headers />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App