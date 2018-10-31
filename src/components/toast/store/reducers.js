import * as constants from './constants'

const defaultState = {
	isOpened: false,
	text: '',
	status: ''
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.OPEN_TOAST:
			return {...state, ...action.data};
		case constants.CLOSE_TOAST:
			return {...state, isOpened: false};
		default:
			return state;
	}
}