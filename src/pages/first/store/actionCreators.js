import * as constants from './constants'
import Taro from '@tarojs/taro'

export const getData = () => {
	return (dispatch) => {
		Taro.request({
		  url: 'http://localhost:3000/',
		  data: {
		    
		  },
		  header: {
		    'content-type': 'application/json'
		  }
		})
		.then(res => {
			console.log(res.data)

		})
		.catch((err) => {
			console.log(err)
		})
	}
}