import * as constants from './constants'
import { actionCreators as constantsFromFirst }from '../../first/store'
import { actionCreators as constantsFromSecond }from '../../secend/store'
import Taro from '@tarojs/taro'

export const pickBigItem = (obj, s) => ({
	type: constants.PICK_BIG,
	data: obj,
	flag: s
})

const clearItems = () => ({
	type: constants.CLEAR_ITEMS
})

export const firstToAdd = (arr, str) => ({
	type: constants.FIRST_TO_ADD,
	data: {
		arr,
		str
	}
})

export const saveItem = (arr, date, date1) => {
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
				dispatch(constantsFromFirst.changeData(res.data.data))
				if(date === date1){
					dispatch(constantsFromSecond.inistialData(res.data.data))
				}
				Taro.navigateBack()
				dispatch(clearItems())
			})
			.catch((err) => {
				console.log(err)
			})
	}
}