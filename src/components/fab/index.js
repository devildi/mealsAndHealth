import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar, AtCard, AtTag } from 'taro-ui'

import './index.css'

class Index extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick(){
    console.log('777')
  }

  render () {
    return (
      <View className='btn'>
	      
      </View>
    )
  }
}

export default Index