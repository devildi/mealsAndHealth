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
    //console.log(this.props.arr3)
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
          <AtButton 
            type='primary'
            onClick={this.props.save}
          >
          保存
          </AtButton>
        </View>
      </View>
    )
  }
}

const mapState = ({addReducer}) => {
  return {
    arr1: addReducer.arr1,
    arr2: addReducer.arr2,
    arr3: addReducer.selected
  }
}

const mapDispatch = (dispatch) => {
  return {
    pickBigItem(obj){
      console.log(obj)
      dispatch(actionCreators.pickBigItem(obj))
    },
    pickSmallItem(obj){
      dispatch(actionCreators.pickBigItem(obj,'1'))
    },
    save(){
      dispatch(actionCreators.saveItem())
    }
  }
}

export default connect(mapState, mapDispatch)(Index)
