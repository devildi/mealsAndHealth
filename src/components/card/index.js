import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar, AtCard, AtTag } from 'taro-ui'

import './index.css'

class Index extends Component {

  componentWillReceiveProps (nextProps) {
    //console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick(){
    console.log('777')
    
  }

  render () {
    return (
      <View className='card'>
	      <AtCard
	        className='card'
	        title='早餐'
	        thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1500446507/bergrb_qa6kz6.png'
	      >
	        <AtTag 
	          active={true}
	          name='tag-1' 
	          type='primary' 
	          circle 
	          onClick={this.onClick.bind(this)}
	        >
	          tag-1
	        </AtTag>
	      </AtCard>
      </View>
    )
  }
}

export default Index