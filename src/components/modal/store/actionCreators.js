import * as constants from './constants';
import Taro from '@tarojs/taro'
import { actionCreators as actionCreatorsFromFirst } from '../../../pages/first/store'
import { actionCreators as actionCreatorsFromSecond } from '../../../pages/secend/store'

export const openModal = (data, y) => ({
	type: constants.OPEN_MODAL,
	data: data,
	which: y
});

export const closeModal = () => ({
	type: constants.CLOSE_MODAL
});

export const changeContent = (data) => ({
	type: constants.CHANGE_CONTENT,
	data: data
});

export const updateContent = (obj, str, time) => {
	return (dispatch) => {
		Taro.request({
				url: 'http://localhost:3000/meal/uptateItem',
				method: 'POST',
				data: {
					obj,
					str
				},
				header: {
					'content-type': 'application/json'
				}
			})
			.then(res => {
				dispatch(actionCreatorsFromFirst.changeData(res.data.data))
				dispatch(closeModal())
				if(res.data.timeStamp === time){
					dispatch(actionCreatorsFromSecond.inistialData(res.data.data))
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}