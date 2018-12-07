import Taro, {
	Component
} from '@tarojs/taro'
import {
	View,
	Text
} from '@tarojs/components'

import Toast from '../../components/toast'

import { AtSearchBar, AtDivider, AtTag, AtActivityIndicator } from 'taro-ui'
import {actionCreators as actionCreatorsFromToast} from '../../components/toast/store'
import {
	connect
} from '@tarojs/redux'
import { actionCreators } from './store'

import './index.css'

class Index extends Component {
	onActionClick(){
		this.props.onActionClick(this.props.content)
	}

	render() {
		return (
			<View className='container'>
				<View>
					<AtSearchBar
		        value={this.props.content}
		        onChange={this.props.handleChange}
		        onActionClick={this.onActionClick.bind(this)}
		        onFocus={this.props.onFocus}
		      />
		    </View>
	      {this.props.content && this.props.confirm && <View className='title'>{`从${this.props.content}出发：`}</View>}
	      {this.props.hasGOrD && this.props.hasGOrD.length > 0 && 
	     	<View>
	      	<AtDivider content='动车高铁' />
		      <View>
		      	{
		      		this.props.hasGOrD.map((i) => (
		      			<View className='tag' key={i}>
		      				<AtTag active type='primary'>{i.to}</AtTag>
		      			</View>
		      		))
		      	}
		      </View>
		    </View>}
		    {this.props.overNight && this.props.overNight.length > 0 && 
		    <View>
	      	<AtDivider content='夕发朝至' />
		      <View>
		      	{
		      		this.props.hasGOrD.map((i) => (
		      			<View className='tag' key={i}>
		      				<AtTag active type='primary'>{i.to}</AtTag>
		      			</View>
		      		))
		      	}
		      </View>
		    </View>}
		    {this.props.isLoading && <AtActivityIndicator 
		    	mode='center' 
		    	content='数据爬取中...'
		    >
		    </AtActivityIndicator>}
		    <Toast />
			</View>
		)
	}
}

const mapState = ({
	thirdReducer
}) => {
	return {
		content: thirdReducer.content,
		confirm: thirdReducer.confirm,
		isLoading: thirdReducer.isLoading,
		hasGOrD: thirdReducer.hasGOrD,
		overNight: thirdReducer.overNight
	}
}

const mapDispatch = (dispatch) => {
	return {
		handleChange(v){
			dispatch(actionCreators.changeContents(v))
		},
		onFocus(){
			dispatch(actionCreators.confirm(false))
		},
		onActionClick(content){
			console.log(content)
			if(!content){
				return dispatch(actionCreatorsFromToast.openToast({
          isOpened: true,
          text: '你忘了填写搜索框！',
          status: 'error'
        }))
			}
			dispatch(actionCreators.confirm(true))
			dispatch(actionCreators.changeLoading(true))
			dispatch(actionCreators.crawler())
		}
	}
}

export default connect(mapState, mapDispatch)(Index)