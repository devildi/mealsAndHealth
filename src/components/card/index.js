import Taro, {
	Component
} from '@tarojs/taro'
import {
	View
} from '@tarojs/components'
import {
	AtCard,
	AtTag
} from 'taro-ui'
import {
  connect
} from '@tarojs/redux'

import { actionCreators } from '../modal/store'

import './index.css'

import Modal from '../modal'

class Index extends Component {

	componentWillReceiveProps(nextProps) {
		//console.log(this.props, nextProps)
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	onClick(i, y) {
		//console.log(i, y)
		//e.stopPropagation()
		this.props.handleClick(i, y)
	}

	render() {
		return (
			<View className='card'>
	      <AtCard
	        className='card'
	        title={this.props.title}
	        thumb={this.props.thumb}
	      >
	      {
	      	this.props.items && this.props.items.map((r, i) => (
	      		<View key={i} className='tag'>
							<AtTag
			          active={r.dis === '' ? false : true}
			          name={r.name}  
								onClick ={this.onClick.bind(this, r, this.props.title)}
			        >
			          {r.name}
			        </AtTag>
		        </View>
	      	))
	      }
	      </AtCard>
	      <Modal />
      </View>
		)
	}
}

const mapState = () => {
	return {

	}
}

const mapDispatch = (dispatch) => {
  return {
    handleClick(i, y) {
      dispatch(actionCreators.openModal(i, y))
    }
  }
}

export default connect(mapState, mapDispatch)(Index)