import * as constants from './constants';
import Taro from '@tarojs/taro'

import {actionCreators} from '../../../components/toast/store'

export const changeDate = (date) => ({
	type: constants.CHANGE_DATE,
	date: date
});

export const inistialData = (data) => ({
	type: constants.INISTIAL_DATA,
	data: data
});

export const getData = (date) => {
	return (dispatch) => {
		Taro.request({
				url: 'http://localhost:3000/meal/item',
				data: {
					date: date
				},
				header: {
					'content-type': 'application/json'
				}
			})
			.then(res => {
				if(res.data.data){
					console.log(res.data.data)
					dispatch(changeDate(date))
					dispatch(inistialData(res.data.data))
				} else {
					dispatch(changeDate(''))
					dispatch(inistialData({breakfast: [],lunch: [],supper: [],dessert: [],status: []}))
					dispatch(actionCreators.openToast({
						isOpened: true,
						text: '当日无数据',
						status: 'error'
					}))
				}
			})
			.catch((err) => {
				console.log(err)
				dispatch(actionCreators.openToast({
						isOpened: true,
						text: '网络故障，稍后再试！',
						status: 'error'
					}))
			})
	}
}