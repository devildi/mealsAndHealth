import * as constants from './constants'
import * as constantsFromFirst from '../../first/store/constants'
import Taro from '@tarojs/taro'

export const pickBigItem = (obj, s) => ({
	type: constants.PICK_BIG,
	data: obj,
	flag: s
})

export const saveItem = (arr) => {
	return (dispatch) => {
		Taro.request({
				url: 'http://localhost:3000/meal/item',
				method: 'POST',
				data: {
					arr
				},
				header: {
					'content-type': 'application/json'
				}
			})
			.then(res => {
				console.log(constantsFromFirst)
				//dispatch(changeData(res.data.data))
				//console.log('@@@@@@@@@@')
				//Taro.navigateBack()
			})
			.catch((err) => {
				console.log(err)
			})
	}
}