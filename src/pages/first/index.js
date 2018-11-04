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

import { actionCreators as actionCreatorsFromAdd} from '../add/store'

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
    Taro.getUserInfo()
    .then((res) => {
      //console.log(res)
      this.props.getData(res.userInfo.nickName)
    })
  }

  componentDidHide() {}

  // click(arr, str, e){
  //   this.props.firstToAdd(arr, str)
  //   onClick={this.click.bind(this, this.props.lunch, '午饭')}
  // }

  render() {
    return (
      <View className='index'>
        {this.props.breakfast.length > 0 
          && <CardMe
          title='早饭' 
          items={this.props.breakfast}
          thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1541051655/Food-Icons-06_o2jpqs.png'
        />}
        {this.props.lunch.length > 0 
          && <CardMe
          title='午饭' 
          items={this.props.lunch}
          thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1500446507/bergrb_qa6kz6.png'
        />}
        {this.props.supper.length > 0 
          && <CardMe
          title='晚饭' 
          items={this.props.supper}
          thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1541051655/Food-Icons-05_m4bwtl.png'
        />}
        {this.props.dessert.length > 0 
          && <CardMe
          title='零食' 
          items={this.props.dessert}
          thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1541051654/Food-Icons-13_dgcjfr.png'
        />}
        {this.props.status.length > 0 
          && <CardMe
          title='身体状态'
          items={this.props.status}
          thumb='https://res.cloudinary.com/dnfhsjz8u/image/upload/v1541051655/bodyboard-1_ucbldu.png'
        />}
        {
          this.props.breakfast.length
           || this.props.lunch.length
           || this.props.supper.length
           || this.props.dessert.length
           || this.props.status.length
          ? this.props.breakfast.length
             && this.props.lunch.length
             && this.props.supper.length
             && this.props.dessert.length
             && this.props.status.length
             ? <Fab />
             : <Fab />
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
    getData(name) {
      dispatch(actionCreators.getData(name))
    },
    firstToAdd(arr, str){
      dispatch(actionCreatorsFromAdd.firstToAdd(arr, str))
      Taro.navigateTo({
        url: '/pages/add/index'
      })
    }
  }
}

export default connect(mapState, mapDispatch)(Index)