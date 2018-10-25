import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store';

import CardMe from '../../components/card/index'
import Fab from '../../components/fab/index'
import Blc from '../../components/block/index'

import './index.css'

class Index extends Component {

  config = {
    navigationBarTitleText: '记录我的健康'
  }

  componentWillReceiveProps (nextProps) {
    //console.log(nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidMount () {
    this.props.getData()
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {this.props.breakfast && <CardMe />}
        {this.props.lunch && <CardMe />}
        {this.props.supper && <CardMe />}
        {this.props.dessert && <CardMe />}
        {this.props.status && <CardMe />}
        {this.props.exercise && <CardMe />}
        {
          this.props.breakfast || this.props.lunch || this.props.supper || this.props.dessert || this.props.status || this.props.exercise
          ? <Fab />
          : <Blc />
        }
      </View>
    )
  }
}

const mapState = ({firstReducer}) => {
  return {
    breakfast: firstReducer.breakfast,
    lunch: firstReducer.lunch,
    supper: firstReducer.supper,
    dessert: firstReducer.dessert,
    status: firstReducer.status,
    exercise: firstReducer.exercise
  }
}

const mapDispatch = (dispatch) => {
  return {
    getData(){
      console.log('获取数据')
      dispatch(actionCreators.getData())
    }
  }
}

export default connect(mapState, mapDispatch)(Index)