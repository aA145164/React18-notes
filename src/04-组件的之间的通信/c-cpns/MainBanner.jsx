import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    const { title, banners } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {
            banners.map(item => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainBanner