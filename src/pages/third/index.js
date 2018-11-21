import Taro, {
	Component
} from '@tarojs/taro'
import {
	View,
	Text
} from '@tarojs/components'

import { AtSearchBar } from 'taro-ui'

import {
	connect
} from '@tarojs/redux'

import './index.css'

class Index extends Component {
	render() {
		return (
			<View>
				<AtSearchBar
	        value={this.state.value}
	        onChange={this.onChange.bind(this)}
	      />
			</View>
		)
	}
}

const mapState = ({
	
}) => {
	return {
		
	}
}

const mapDispatch = (dispatch) => {
	return {
		
	}
}

export default connect(mapState, mapDispatch)(Index)