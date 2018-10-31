import Taro, { Component } from '@tarojs/taro'
import { AtToast } from "taro-ui"
import { connect } from '@tarojs/redux'
import {
	actionCreators
} from './store'

class Index extends Component {
  render () {
    return (
      <AtToast
			  isOpened={this.props.isOpened}
			  text={this.props.text}
			  iconSize={20}
			  status={this.props.status}
			  duration={2000}
			  onClose={this.props.close}
			  onClick={this.props.close}
		  />
    )
  }
}

const mapState = ({
  toastReducer
}) => {
	return {
		isOpened: toastReducer.isOpened,
		text: toastReducer.text,
		status: toastReducer.status
	}
}

const mapDispatch = (dispatch) => {
	return {
		close() {
			dispatch(actionCreators.closeToast())
		}
	}
}

export default connect(mapState, mapDispatch)(Index)