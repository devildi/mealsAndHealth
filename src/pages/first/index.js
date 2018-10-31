import Taro, {
  Component
} from '@tarojs/taro'
import {
  View
} from '@tarojs/components'
import {
  connect
} from '@tarojs/redux'
import {
  actionCreators
} from './store';

import CardMe from '../../components/card/index'
import Fab from '../../components/fab/index'
import Blc from '../../components/block/index'

import './index.css'

class Index extends Component {

  config = {
    navigationBarTitleText: '记录我的健康'
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidMount() {
    this.props.getData()
  }

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        {this.props.breakfast.length > 0 && <CardMe title='早饭' items={this.props.breakfast}/>}
        {this.props.lunch.length > 0 && <CardMe title='午饭' items={this.props.lunch}/>}
        {this.props.supper.length > 0 && <CardMe title='晚饭' items={this.props.supper}/>}
        {this.props.dessert.length > 0 && <CardMe title='零食' items={this.props.dessert}/>}
        {this.props.status.length > 0 && <CardMe title='身体状态' items={this.props.status}/>}
        {
          this.props.breakfast.length
           || this.props.lunch.length
           || this.props.supper.length
           || this.props.dessert.length
           || this.props.status.length
          ? <Fab />
          : <Blc />
        }
      </View>
    )
  }
}

const mapState = ({
  firstReducer
}) => {
  return {
    breakfast: firstReducer.breakfast,
    lunch: firstReducer.lunch,
    supper: firstReducer.supper,
    dessert: firstReducer.dessert,
    status: firstReducer.status
  }
}

const mapDispatch = (dispatch) => {
  return {
    getData() {
      dispatch(actionCreators.getData())
    }
  }
}

export default connect(mapState, mapDispatch)(Index)