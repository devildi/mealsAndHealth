import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store';

import CardMe from '../../components/card/index'
import Fab from '../../components/fab/index'

import './index.css'

class Index extends Component {

  config = {
    navigationBarTitleText: '记录我的健康'
  }

  componentWillReceiveProps (nextProps) {
    //console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <CardMe />
        <CardMe />
        <CardMe />
        <CardMe />
        <Fab />
      </View>
    )
  }
}

const mapState = ({indexReducer}) => {
  return {
    
  }
}

const mapDispatch = (dispatch) => {
  return {
    
  }
}

export default connect(mapState, mapDispatch)(Index)