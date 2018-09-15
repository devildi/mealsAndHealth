import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtTag } from 'taro-ui'

import CardMe from '../../components/card/index'

import './index.css'


class Index extends Component {

  config = {
    navigationBarTitleText: '记录'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick(){
    console.log('777')
  }

  render () {
    return (
      <View className='index'>
        <View>
          <AtTag type='primary' >标签</AtTag>
          <AtTag type='primary' >标签</AtTag>
          <AtTag type='primary' >标签</AtTag>
          <AtTag type='primary' >标签</AtTag>
          <AtTag type='primary' >标签</AtTag>
          <AtTag type='primary' >标签</AtTag>
          <AtTag type='primary' >标签</AtTag>
          <AtTag type='primary' >标签</AtTag>
          <AtTag type='primary' >标签</AtTag>
        </View>
        <View className='btn'>
          <AtButton type='primary'>保存</AtButton>
        </View>
      </View>
    )
  }
}

export default Index
