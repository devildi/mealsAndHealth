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
					dispatch(changeDate(date))
					dispatch(inistialData(res.data.data))
				} else {
					dispatch(actionCreators.openToast({
						isOpened: true,
						text: '当日无数据',
						status: 'error'
					}))
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}