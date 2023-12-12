import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import axios from 'axios'

export class Main extends Component {
  constructor() {
    super()

    this.state = {
      banners: [],
      productList: []
    }
  }

  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      this.setState({
        banners: res.data.data.banner.list,
        productList: res.data.data.keywords.list
      })
    })
  }

  render() {
    const { banners, productList } = this.state
    return (
      <div className='main'>
        <div>Main</div>
        <MainBanner banners={banners} title="轮播图" />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main