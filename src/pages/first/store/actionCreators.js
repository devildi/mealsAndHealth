import * as constants from './constants'
import Taro from '@tarojs/taro'

export const getData = (name) => {
	return (dispatch) => {
		Taro.request({
				url: 'http://localhost:3000/meal/item',
				// data: {
				// 	name: name
				// },
				header: {
					'content-type': 'application/json'
				}
			})
			.then(res => {
				if(res.data.data){
					dispatch(changeData(res.data.data))
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const changeData = (data) => ({
	type: constants.CHANGE_DATA,
	data: data
});