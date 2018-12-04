import Taro, {
	Component
} from '@tarojs/taro'
import {
	View,
	Text
} from '@tarojs/components'

import { AtSearchBar, AtDivider, AtTag, AtActivityIndicator } from 'taro-ui'

import {
	connect
} from '@tarojs/redux'
import { actionCreators } from './store'

import './index.css'

class Index extends Component {
	render() {
		return (
			<View className='container'>
				<View>
					<AtSearchBar
		        value={this.props.content}
		        onChange={this.props.handleChange}
		        onActionClick={this.props.onActionClick}
		      />
		    </View>
	      <View className='title'>沈阳出发：</View>
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
			</View>
		)
	}
}

const mapState = ({
	thirdReducer
}) => {
	return {
		content: thirdReducer.content,
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
		onActionClick(){
			dispatch(actionCreators.changeLoading())
			dispatch(actionCreators.crawler())
		}
	}
}

export default connect(mapState, mapDispatch)(Index)