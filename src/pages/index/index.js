import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabBar, AtCard, AtTag } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'

import CardMe from '../../components/card/index'

import './index.css'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '记录我的健康'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick(i){
    console.log(i)
    // Taro.navigateTo({
    //   url: '/pages/add/index'
    // })
  }

  render () {
    return (
      <View className='index'>
        <CardMe />
        <CardMe />
        <CardMe />
        <CardMe />
        <CardMe />
        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', iconType: 'bullet-list' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index
