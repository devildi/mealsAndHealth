import Taro, { Component } from '@tarojs/taro'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput} from "taro-ui"
import { connect } from '@tarojs/redux'
import {
	actionCreators
} from './store'

class Index extends Component {

	submit(){
		this.props.submit(this.props.content)
	} 

  render () {
    return (
      <AtModal isOpened={this.props.isOpened}>
			  <AtModalHeader>{this.props.title}</AtModalHeader>
			  <AtModalContent>
			  	<AtInput
		        name='value'
		        type='text'
		        placeholder='描述你的早餐！'
		        value={this.props.content}
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
  modalReducer
}) => {
	return {
		isOpened: modalReducer.isOpened,
		title: modalReducer.title,
		content: modalReducer.content
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
		submit(v){
			console.log(v)
		}
	}
}

export default connect(mapState, mapDispatch)(Index)