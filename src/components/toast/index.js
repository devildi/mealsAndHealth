import Taro, { Component } from '@tarojs/taro'
import { AtToast } from "taro-ui"
import { connect } from '@tarojs/redux'

class Index extends Component {
  render () {
    return (
      <AtToast
			  isOpened={this.props.isOpen}
			  text={'text'}
			  iconSize={15}
			  status='error'
		  />
    )
  }
}

export default Index