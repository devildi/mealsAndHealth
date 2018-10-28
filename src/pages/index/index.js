import Taro, {
  Component
} from '@tarojs/taro'
import {
  View
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'
import {
  AtTabBar,
  AtCard
} from 'taro-ui'
import {
  actionCreators
} from './store'

import First from '../first'
import Secend from '../secend'

import './index.css'

class Index extends Component {

  config = {
    navigationBarTitleText: '记录我的健康'
  }

  componentWillReceiveProps(nextProps) {
    //console.log(this.props, nextProps)
  }

  componentWillMount() {
    //let array = JSON.parse(this.$router.params.array)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        {this.props.current === 0 && <First />}
        {this.props.current === 1 && <Secend />}
        <AtTabBar
          fixed
          tabList={[
            { title: '今日状态', iconType: 'edit' },
            { title: '历史记录', iconType: 'bullet-list' },
            { title: '看一看', iconType: 'eye'}
          ]}
          onClick={this.props.handleClick}
          current={this.props.current}
        />
      </View>
    )
  }
}

const mapState = ({
  indexReducer
}) => {
  return {
    current: indexReducer.current
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick(i) {
      dispatch(actionCreators.changeTab(i))
    }
  }
}

export default connect(mapState, mapDispatch)(Index)