import Taro, {
  Component
} from '@tarojs/taro'
import {
  View
} from '@tarojs/components'
import {
  AtIcon
} from 'taro-ui'

import './index.css'

class Index extends Component {

  componentWillReceiveProps(nextProps) {
    //console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick() {
    Taro.navigateTo({
      url: '/pages/add/index'
    })
  }

  render() {
    return (
      <View className='btn' onClick={this.handleClick.bind(this)}>
        <View className='btn1'>
          <AtIcon value='add-circle' size='70' ></AtIcon>
        </View>
      </View>
    )
  }
}

export default Index