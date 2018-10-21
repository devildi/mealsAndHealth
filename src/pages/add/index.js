import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtTag } from 'taro-ui'
import { toJS } from 'immutable'

import CardMe from '../../components/card/index'
import Div from '../../components/division'

import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import './index.css'

class Index extends Component {

  config = {
    navigationBarTitleText: '记录'
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
        <View className='at-row at-row--wrap'>
        {
          this.props.arr1.map((row, index) => (
            <View className='block' key={index}>
              <AtTag
                name={row.name}
                type='primary'
                circle
                active={row.active}
                onClick={this.props.pickBigItem} 
              >
                {row.name}
              </AtTag>
            </View>
          ))
        }
        </View>
        <Div />
        <View className='at-row at-row--wrap'>
        {
          this.props.arr2.map((row, index) => (
            <View className='block' key={index}>
              <AtTag 
                name={row.name}
                active={row.active}
                onClick={this.props.pickSmallItem} 
              >
                {row.name}
              </AtTag>
            </View>
          ))
        }
        </View>
        <View className='btn'>
          <AtButton type='primary'>保存</AtButton>
        </View>
      </View>
    )
  }
}

const mapState = ({addReducer}) => {
  return {
    arr1: addReducer.get('arr1').toJS(),
    arr2: addReducer.get('arr2').toJS()
  }
}

const mapDispatch = (dispatch) => {
  return {
    pickBigItem(row){
      console.log(row)
      dispatch(actionCreators.pickBigItem(row))
    },
    pickSmallItem(obj){
      console.log(obj)
      dispatch(actionCreators.pickBigItem(obj))
    }
  }
}

export default connect(mapState, mapDispatch)(Index)
