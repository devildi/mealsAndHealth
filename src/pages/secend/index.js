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
				{this.props.breakfast.length > 0 
					&& <List 
					title='早饭' 
					items={this.props.breakfast}
					thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1541051655/Food-Icons-06_o2jpqs.png'
					/>
				}
        {this.props.lunch.length > 0 
        	&& <List 
        	title='午饭' 
        	items={this.props.lunch}
					thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1500446507/bergrb_qa6kz6.png'
        	/>
        }
        {this.props.supper.length > 0 
        	&& <List 
        	title='晚饭' 
        	items={this.props.supper}
					thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1541051655/Food-Icons-05_m4bwtl.png'
        	/>
        }
        {this.props.dessert.length > 0 
        	&& <List 
        	title='零食' 
        	items={this.props.dessert}
					thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1541051654/Food-Icons-13_dgcjfr.png'
        	/>
        }
        {this.props.status.length > 0 
        	&& <List 
        	title='身体状态' 
        	items={this.props.status}
					thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1541051655/bodyboard-1_ucbldu.png'
        	/>
        }
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