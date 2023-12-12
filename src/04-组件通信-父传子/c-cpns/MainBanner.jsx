import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class MainBanner extends Component {
  // 最新语法
  static defaultProps = {
    banners: [],
    title: '我是轮播'
  }

  render() {
    const { title, banners } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {
            banners.map(item => {
              return <li key={item.acm
              }>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
// 类型限制
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string
}
// 设置默认值
// MainBanner.defaultProps = {
//   banners: [],
//   title: '我是轮播'
// }
export default MainBanner