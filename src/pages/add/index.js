import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtTag } from 'taro-ui'
import { toJS } from 'immutable'

import CardMe from '../../components/card/index'
import Div from '../../components/division'
import Toast from '../../components/toast'

import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import './index.css'

class Index extends Component {
  constructor () {
    super ()
    this.state = {
     arrForSave: []
    }
  }
  config = {
    navigationBarTitleText: '记录'
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      arrForSave: nextProps.arr3
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  save(){
    let s = JSON.stringify(this.state.arrForSave)
    Taro.navigateBack({
      array: this.state.arrForSave
    })
    //this.props.save(this.state.arrForSave)
  }

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
          <AtButton 
            type='primary'
            onClick={this.save.bind(this)}
          >
          保存
          </AtButton>
        </View>
        <Toast isOpen={this.props.status}/>
      </View>
    )
  }
}

const mapState = ({addReducer}) => {
  return {
    arr1: addReducer.arr1,
    arr2: addReducer.arr2,
    arr3: addReducer.selected,
    status: addReducer.statusOfToast
  }
}

const mapDispatch = (dispatch) => {
  return {
    pickBigItem(obj){
      dispatch(actionCreators.pickBigItem(obj))
    },
    pickSmallItem(obj){
      dispatch(actionCreators.pickBigItem(obj,'1'))
    },
    save(arr){
      if(!arr[0]){
        return console.log('有项未选！')
      }
      dispatch(actionCreators.saveItem(arr))
    }
  }
}

export default connect(mapState, mapDispatch)(Index)
