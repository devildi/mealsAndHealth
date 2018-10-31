import Taro, {
	Component
} from '@tarojs/taro'
import {
	View,
	Text,
	Picker
} from '@tarojs/components'
import {
	AtList,
	AtListItem,
	AtCard
} from "taro-ui"

import Toast from '../../components/toast'

import {
	connect
} from '@tarojs/redux'
import {
	actionCreators
} from './store'

import Div from '../../components/division'
import List from '../../components/list'
import './index.css'

class Index extends Component {
	render() {
		return (
			<View className='container'>
				<Picker mode='date' onChange={this.props.getData}>
					<View className='picker'>
						<View>
							当前选择:
						</View>
						<View>
							{this.props.dateSel === '' ? '选择日期' : this.props.dateSel}
						</View>
					</View>
					<Div />
				</Picker>
				{this.props.breakfast.length > 0 && <List title='早饭' items={this.props.breakfast}/>}
        {this.props.lunch.length > 0 && <List title='午饭' items={this.props.lunch}/>}
        {this.props.supper.length > 0 && <List title='晚饭' items={this.props.supper}/>}
        {this.props.dessert.length > 0 && <List title='零食' items={this.props.dessert}/>}
        {this.props.status.length > 0 && <List title='身体状态' items={this.props.status}/>}
        {this.props.exercise.length > 0 && <List title='锻炼情况' items={this.props.exercise}/>}
				<Toast />
			</View>
		)
	}
}

const mapState = ({
	secondReducer
}) => {
	return {
		dateSel: secondReducer.dateSel,
		breakfast: secondReducer.breakfast,
    lunch: secondReducer.lunch,
    supper: secondReducer.supper,
    dessert: secondReducer.dessert,
    status: secondReducer.status
	}
}

const mapDispatch = (dispatch) => {
	return {
		getData(e) {
			dispatch(actionCreators.getData(e.detail.value))
		}
	}
}

export default connect(mapState, mapDispatch)(Index)