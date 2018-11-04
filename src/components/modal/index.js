import Taro, { Component } from '@tarojs/taro'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput} from "taro-ui"
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

class Index extends Component {

	submit(){
		this.props.submit(
			{...this.props.obj, dis: this.props.content}, 
			this.props.which,
			this.props.timeStamp)
	}

  render () {
    return (
      <AtModal 
      	isOpened={this.props.isOpened}
      >
			  <AtModalHeader>{this.props.obj.name}</AtModalHeader>
			  <AtModalContent>
			  	<AtInput
		        name='value'
		        type='text'
		        placeholder={`在这里添加描述...`}
		        value={this.props.obj.dis}
		        onChange={this.props.handleChange}
		      />
			  </AtModalContent>
			  <AtModalAction>
			    <Button onClick={this.props.closeModal}>取消</Button>
			    <Button onClick={this.submit.bind(this)}>提交</Button>
			  </AtModalAction>
			</AtModal>
    )
  }
}

const mapState = ({
  modalReducer,
  secondReducer
}) => {
	return {
		isOpened: modalReducer.isOpened,
		obj: modalReducer.obj,
		content: modalReducer.content,
		which: modalReducer.which,
		timeStamp: secondReducer.dateSel
	}
}

const mapDispatch = (dispatch) => {
	return {
		closeModal(){
			dispatch(actionCreators.closeModal())
		},
		handleChange(v){
			dispatch(actionCreators.changeContent(v))
		},
		submit(obj, s, t){
			dispatch(actionCreators.updateContent(obj, s, t))
		}
	}
}

export default connect(mapState, mapDispatch)(Index)