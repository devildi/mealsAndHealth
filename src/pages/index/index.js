import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabBar, AtCard, AtTag } from 'taro-ui'
import { actionCreators } from './store';

import CardMe from '../../components/card/index'

import './index.css'

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

  render () {
    return (
      <View className='index'>
        {this.props.current === 0 && <CardMe />}
        <AtTabBar
          fixed
          tabList={[
            { title: '今日状态', iconType: 'bullet-list' },
            { title: '记录', iconType: 'camera' },
            { title: '统计', iconType: 'folder'}
          ]}
          onClick={this.props.handleClick}
          current={this.props.current}
        />
      </View>
    )
  }
}

const mapState = ({indexReducer}) => {
  return {
    current: indexReducer.get('current')
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick(i){
      dispatch(actionCreators.changeTab(i))
    }
  }
}

export default connect(mapState, mapDispatch)(Index)
