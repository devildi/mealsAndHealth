import * as constants from './constants'
import Taro from '@tarojs/taro'

export const crawler = (name) => {
	return (dispatch) => {
		Taro.request({
				url: 'http://localhost:3000/12306/get',
				header: {
					'content-type': 'application/json'
				}
			})
			.then(res => {
				if(res.data.data){
					let hasGOrD = []
					let overNight = []
					console.log(res.data.data)
					res.data.data.map((i) => {
						if(i.hasGOrD.length > 0) {hasGOrD.push(i)}
						if(i.overNight.length > 0) {overNight.push(i)}
					})
					dispatch(changeCityArray(hasGOrD, overNight))
					dispatch(changeLoading())
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export const changeContents = (data) => ({
	type: constants.CHANGE_CONTENTS,
	data: data
})
export const changeLoading = () => ({
	type: constants.CHANGE_LOADING
})
export const changeCityArray = (arr1, arr2) => ({
	type: constants.CHANGE_CITY_ARRAY,
	data: [arr1, arr2]
})