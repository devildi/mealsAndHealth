import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker} from '@tarojs/components'
import { AtList, AtListItem, AtCard} from "taro-ui"

import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import Div from '../../components/division'
import './index.css'

class Index extends Component {
	render () {
    return (
      <View className='container'>
        <Picker mode='date' onChange={this.props.onDateChange}>
          <View className='picker'>
            <View>
              当前选择:
            </View>
            <View>
              {this.props.dateSel === '' ? '点击此处选择日期' : this.props.dateSel}
            </View>
          </View>
          <Div />
        </Picker>
        <View className='cardContainer'>
	        <AtCard
					  title='早饭'
					  thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1500446507/bergrb_qa6kz6.png'
					>
		        <AtList>
						  <AtListItem title='标题文字' onClick={this.handleClick} />
						  <AtListItem title='标题文字' />
						  <AtListItem title='标题文字' extraText='详细信息' />
						</AtList>
					</AtCard>
				</View>
				<View className='cardContainer'>
					<AtCard
					  title='中饭'
					  thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1500446507/bergrb_qa6kz6.png'
					>
		        <AtList>
						  <AtListItem title='标题文字' onClick={this.handleClick} />
						  <AtListItem title='标题文字' />
						  <AtListItem title='标题文字' extraText='详细信息' />
						</AtList>
					</AtCard>
				</View>
      </View>
    )
  }
}

const mapState = ({secondReducer}) => {
  return {
  	dateSel: secondReducer.get('dateSel')
  }
}

const mapDispatch = (dispatch) => {
  return {
    onDateChange(e){
    	dispatch(actionCreators.changeDate(e.detail.value))
    }
  }
}

export default connect(mapState, mapDispatch)(Index)