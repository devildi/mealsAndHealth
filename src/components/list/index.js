import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {
	AtList,
	AtListItem,
	AtCard
} from "taro-ui"

import './index.css'

class Index extends Component {
  render () {
    return (
      <View className='cardContainer'>
				<AtCard
					title={this.props.title}
					thumb={this.props.thumb}
				>
					<AtList>
						{
							this.props.items && this.props.items.map((r, i) => (
								<AtListItem title={r.name} key={i} extraText={r.des}/>
							))
						}
					</AtList>
				</AtCard>
			</View>
    )
  }
}

export default Index