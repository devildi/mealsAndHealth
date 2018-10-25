import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.css'

class Index extends Component {

  handleClick(){
    Taro.navigateTo({
      url: '/pages/add/index'
    })
  }

  render () {
    return (
      <View className='btn' onClick={this.handleClick.bind(this)}>
        <View className='btn1'>
          <AtIcon value='add' size='100' ></AtIcon>
        </View>
      </View>
    )
  }
}

export default Index