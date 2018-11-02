import Taro, {
	Component
} from '@tarojs/taro'
import {
	View
} from '@tarojs/components'
import {
	AtTabBar,
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

	onClick(i) {
		//e.stopPropagation()
		this.props.handleClick(i)
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
						<AtTag 
		          active={true}
		          name={r.name} 
							onClick ={this.onClick.bind(this, r)}
							key={i}
		        >
		          {r.name}
		        </AtTag>
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
    handleClick(i) {
      dispatch(actionCreators.openModal(i))
    }
  }
}

export default connect(mapState, mapDispatch)(Index)